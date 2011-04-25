class User < ActiveRecord::Base

  attr_accessible :login, :password, :password_confirmation, :email
  attr_reader :invitation # for users/new action

  # see also config/initializers/devise.rb
  devise :token_authenticatable, :database_authenticatable, :rememberable, :trackable, :recoverable, :validatable

  has_many :posts, :order => 'posts.created_at DESC'
  has_many :sandwiches, :order => 'sandwiches.created_at DESC'
  # has_many :feed_items, :order => 'feed_items.sandwich_created_at DESC'
  has_many :invitations, :order => 'invitations.created_at DESC'

  # has_many :follows_where_they_are_doing_the_following, :foreign_key => :follower_id, :class_name => 'Follow'
  # has_many :followings, :through => :follows_where_they_are_doing_the_following

  # has_many :follows_where_they_are_being_followed, :foreign_key => :following_id, :class_name => 'Follow'
  # has_many :followers, :through => :follows_where_they_are_being_followed

  belongs_to :inviter, :class_name => 'User'

  validates_presence_of :login, :email
  validates_length_of :login, :maximum => 15
  validates_format_of :login, :with => /^[a-zA-Z0-9\_]*?$/, :message => "can only contain letters, numbers and _"
  validates_format_of :login, :with => /^[a-zA-Z]/, :message => "must begin with a letter"
  validates_uniqueness_of :login, :email

  before_destroy :destroy_not_implemented

  def destroy_not_implemented
    raise 'NotImplemented' # would have to clean things up on destroy
    # Follow.find_each {|f| f.destroy if f.follower.nil?}
    # Follow.find_each {|f| f.destroy if f.following.nil?}
    # FeedItem.find_each {|f| f.destroy if f.user.nil?}
    # FeedItem.find_each {|f| f.destroy if f.poster.nil?}
  end

  # def follow(user)
  #   Follow.create {|r| r.follower = self; r.following = user}
  # end
  # 
  # def unfollow(user)
  #   Follow.find_by_follower_id_and_following_id(self.id, user.id).destroy rescue nil
  # end
  # 
  # def following?(user)
  #   Follow.find_by_follower_id_and_following_id(self.id, user.id).present?
  # end
  # 
  # def follow_all_users
  #   User.find_each do |existing_user|
  #     self.follow(existing_user)
  #   end
  # end
  # 
  # def get_followed_by_all_users
  #   User.find_each do |existing_user|
  #     existing_user.follow(self)
  #   end
  # end

  def to_param
    login
  end

  def to_s
    login
  end

end
