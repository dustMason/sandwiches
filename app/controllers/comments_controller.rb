class CommentsController < ApplicationController
  
  def index
    @comment = Comment.new :sandwich_id => params[:sandwich_id]
    @comments = Comment.find_all_by_sandwich_id params[:sandwich_id], :include => :user
    render :layout => false
  end

  def new
  end

  def create
    @comment = current_user.comments.build(params[:comment])
    if @comment.save
      Mailer.commented(@comment.sandwich.user,@comment).deliver if @comment.sandwich.user.wants_email
      render :partial => 'comment', :locals => {:comment => @comment}
    else
      render :partial => 'error'
      # render :action => "new"
      # i dunno
    end
  end

  def destroy
  end

end
