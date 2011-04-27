class LikesController < ApplicationController
    
  # def create
  #   # has params :sandwich_id
  #   sandwich = Sandwich.find(params[:sandwich_id])
  #   like = sandwich.likes.build :user_id => current_user.id
  #   if like.save
  #     render :json => true.to_json
  #   else
  #     render :json => false.to_json
  #   end
  # end
  # 
  # def destroy
  #   like = Sandwich.find(params[:sandwich_id]).likes.find(:first, :conditions => ['user_id = ?', current_user.id])
  #   if like.destroy
  #     render :json => true.to_json
  #   else
  #     render :json => false.to_json
  #   end
  # end
  
end