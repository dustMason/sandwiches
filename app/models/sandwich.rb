class Sandwich < ActiveRecord::Base
  has_many :posts, :dependent => :destroy
  has_many :comments
  has_many :likes
  belongs_to :user, :counter_cache => :sandwiches_count
  
  cattr_reader :per_page
  @@per_page = 9
    
  validates_associated :posts
  validates_presence_of :name
  validate :must_have_3_posts
  
  after_validation :apply_post_errors_to_the_sandwich
  
  def apply_post_errors_to_the_sandwich
    if not self.errors[:posts].nil?
      self.posts.each do |p|
        p.errors.each{ |attr,msg| self.errors.add(attr, msg)}
      end
      self.errors.delete(:posts)
    end
  end

  def must_have_3_posts
    errors.add(:songs, "It takes 3 songs to make a sandwich") unless posts.size == 3
  end

  def to_s
    posts.collect{ |s| s.artist }.join(', ');
  end

end
