class FeedItem < ActiveRecord::Base

  attr_accessible # this space intentionally left blank

  belongs_to :user
  # belongs_to :post
  belongs_to :sandwich
  belongs_to :poster, :foreign_key => 'poster_id', :class_name => 'User'

  # validates_presence_of :user_id, :post_id, :poster_id, :post_created_at
  # validates_uniqueness_of :user_id, :scope => :post_id
  validates_presence_of :user_id, :sandwich_id, :poster_id, :sandwich_created_at
  validates_uniqueness_of :user_id, :scope => :sandwich_id

  default_scope :order => 'sandwich_created_at DESC'

  def self.populate(sandwich)
    users = []
    users << sandwich.user # poster's feed
    sandwich.user.followers.find_each do |follower|
      users << follower # poster's followers' feed
    end if sandwich.user.followers.present?
    users.each do |user|
      FeedItem.insert(user, sandwich)
    end
  end

  def self.unpopulate(sandwich)
    FeedItem.find_all_by_sandwich_id(sandwich.id).each {|f| f.destroy} rescue nil
  end

  def self.unbackfill(follower, following)
    FeedItem.find_all_by_user_id_and_poster_id(follower.id, following.id).each {|f| f.destroy} rescue nil
  end

  def self.insert(user, sandwich)
    FeedItem.create {|f| f.user_id = user.id; f.sandwich_id = sandwich.id; f.poster_id = sandwich.user_id; f.sandwich_created_at = sandwich.created_at}
  end
end