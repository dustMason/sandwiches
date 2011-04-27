class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :sandwich, :counter_cache => :comments_count
  
  validates_presence_of :text, :message => "If a comment has no words, does it exist?"
  
end
