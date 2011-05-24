class SandwichesController < ApplicationController
  
  skip_before_filter :verify_authenticity_token, :only => :create
  before_filter :get_audio_info, :only => :create
    
  def index    
    @sandwiches = Sandwich.paginate(:page => params[:page], :include => [:user, :posts, :likes], :order => 'created_at DESC')
    @users = User.all
    respond_to do |format|
      format.html
      format.rss
    end
  end
  
  def greatest
    @sandwiches = Sandwich.paginate(:page => params[:page], :include => [:user, :posts, :likes], :order => "likes_count DESC, created_at DESC")
    @users = User.all
    render :action => "index"
  end

  def new
    @sandwich = Sandwich.new
  end

  def create
    
    # puts @songs.inspect
    
    @sandwich = current_user.sandwiches.build(:name => params[:name])
    @songs.each do |file|
      @sandwich.posts << current_user.posts.build(:mp3 => file[:filename], :title => file[:title], :artist => file[:artist], :album => file[:album])
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
  
  def like
    sando = Sandwich.find(params[:id])
    like = sando.likes.new :user_id => current_user.id
    res = like.save
    Mailer.liked(current_user,sando).deliver if res && sando.user.wants_email
    render :json => res.to_json
  end
  
  def unlike
    like = Sandwich.find(params[:id]).likes.find(:first, :conditions => ['user_id = ?', current_user.id])
    like.destroy if like
    render :json => true.to_json
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
    # download each song from s3 to process its metadata
    @songs = []
    params[:songs].each do |file|
      # filedata = file[1]
      # escape the filenames first. a little ugly, i know.
      path = file[1]['file'].split("/")
      path[-1] = CGI::escape(path.last)
      path = path.join("/")
      filedata = open(path) # download the song      
      path = URI::split(path)
      file = { :filedata  => filedata }
      # file[:filename] ||= filedata.original_filename if file
      file[:filename] = path[5].split("/").last
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
