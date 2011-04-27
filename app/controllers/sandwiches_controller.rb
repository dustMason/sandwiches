class SandwichesController < ApplicationController
  
  skip_before_filter :verify_authenticity_token, :only => :create
  before_filter :get_audio_info, :only => :create
    
  def index    
    @sandwiches = Sandwich.paginate(:page => params[:page], :include => [:user, :posts])
    @users = User.all
    respond_to do |format|
      format.html
      format.rss
    end
  end

  def new
    @sandwich = Sandwich.new
  end

  def create
    @sandwich = current_user.sandwiches.build(:name => params[:name])
    
    @songs.each do |file|
      @sandwich.posts << current_user.posts.build(:mp3 => file[:filedata], :title => file[:title], :artist => file[:artist], :album => file[:album])
    end if @songs
    
    if @sandwich.valid? && @sandwich.save
      redirect_to root_path
    else
      render :action => "new"
    end    
  rescue => e
    Toadhopper(CONFIG['HOPTOAD_API_KEY']).post!(e) if CONFIG['HOPTOAD_API_KEY']
  end

  def show
    @sandwich = Sandwich.find(params[:id])
  end

  def edit
  end

  def update
  end

  def destroy
  end
  
  protected

  def get_audio_info
    return unless params[:songs]
    @songs = []
    params[:songs].each do |file|
      filedata = file[1]
      file = { :filedata  => filedata }
      file[:filename] ||= filedata.original_filename if file
      path = filedata.respond_to?(:path) ? filedata.path : filedata.tempfile.path
      if file[:filename] =~ /.mp3$/
        Mp3Info.open(path) do |r|
          file[:title] = r.tag.title
          file[:artist] = r.tag.artist
          file[:album] = r.tag.album
        end
      elsif file[:filename] =~ /.mp4$|.m4a$/
        info = MP4Info.open(path)
        file[:title] = info.send(:NAM)
        file[:artist] = info.send(:ART)
        file[:album] = info.send(:ALB)
      end
      file[:title] = file[:title].toutf8 rescue 'Unknown'
      file[:artist] = file[:artist].toutf8 rescue 'Unknown'
      file[:album] = file[:album].toutf8 rescue 'Unknown'
      @songs << file
    end
  end

end
