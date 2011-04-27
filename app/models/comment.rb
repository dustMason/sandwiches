class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :sandwich, :counter_cache => :comments_count
end
