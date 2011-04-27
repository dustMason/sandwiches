class Sandwich < ActiveRecord::Base
  has_many :posts, :dependent => :destroy
  has_many :comments
  has_many :likes
  belongs_to :user, :counter_cache => :sandwiches_count
  
  cattr_reader :per_page
  @@per_page = 9
  
  # default_scope :order => 'created_at DESC'
  
  validates_associated :posts
  validates_presence_of :name
  validate :must_have_3_posts

  def must_have_3_posts
    errors.add(:songs, "It takes 3 songs to make a sandwich") unless posts.size == 3
  end

  def to_s
    posts.collect{ |s| s.artist }.join(', ');
  end

end
