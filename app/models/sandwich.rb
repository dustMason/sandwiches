class Sandwich < ActiveRecord::Base
  has_many :posts
  belongs_to :user
  
  after_create :create_feed_items
  after_destroy :destroy_feed_items

  def create_feed_items
    FeedItem.populate(self)
  end

  def destroy_feed_items
    FeedItem.unpopulate(self)
  end
  
end
