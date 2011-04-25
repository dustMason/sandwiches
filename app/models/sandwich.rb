class Sandwich < ActiveRecord::Base
  has_many :posts, :dependent => :destroy
  belongs_to :user
  
  default_scope :order => 'created_at DESC'
  
  validates_associated :posts
  validates_presence_of :name
  validate :must_have_3_posts

   def must_have_3_posts
     errors.add(:songs, "It takes 3 songs to make a sandwich") if
       !posts.size == 3
   end

end
