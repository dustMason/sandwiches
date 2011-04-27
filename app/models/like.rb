class Like < ActiveRecord::Base
  belongs_to :sandwich, :counter_cache => :likes_count
  belongs_to :user
  
  # validate :cant_like_the_same_sandwich_twice
  validates_uniqueness_of :sandwich_id, :scope => [:user_id]
  
  after_create :increment_recipient_points
  after_destroy :decrement_recipient_points
  
  def increment_recipient_points
    sandwich.user.increment!(:points)
  end
  
  def decrement_recipient_points
    sandwich.user.decrement!(:points)
  end
  
  # def cant_like_the_same_sandwich_twice
  #   errors.add(:like, "Yeah, I know. You like it.") if posts.size == 3
  # end
  
end
