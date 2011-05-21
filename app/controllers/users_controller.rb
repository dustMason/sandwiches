class UsersController < ApplicationController

  skip_before_filter :authenticate_user!, :only => [:new, :create]
  before_filter :deauthenticate_user!, :only => [:new, :create]

  def show
    @user = User.find_by_login! params[:id], :include => [{:sandwiches => :user}, :likes]
    @users = User.all
  end

  def new
    @invitation = Invitation.find_by_code params[:invitation]
    if @invitation.blank?
      flash[:notice] = 'Invitation not found'
      redirect_to root_path
    end
  end

  def create
    @invitation = Invitation.find_by_code! params[:user][:invitation]
    @user = User.new(params[:user])
    @user.inviter = @invitation.user
    if @user.save
      @invitation.redeem_for(@user)
      sign_in @user
      redirect_to root_path
    else
      render :action => 'new'
    end
  end
  
  def wants_email
    current_user.wants_email = params[:wants_email]
    render :json => current_user.save.to_json
  end

  protected

  def deauthenticate_user!
    sign_out current_user if user_signed_in?
  end
end