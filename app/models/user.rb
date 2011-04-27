class User < ActiveRecord::Base

  attr_accessible :login, :password, :password_confirmation, :email
  attr_reader :invitation # for users/new action

  # see also config/initializers/devise.rb
  devise :token_authenticatable, :database_authenticatable, :rememberable, :trackable, :recoverable, :validatable

  has_many :posts, :order => 'posts.created_at DESC', :dependent => :destroy
  has_many :comments, :dependent => :destroy
  has_many :likes
  has_many :sandwiches, :order => 'sandwiches.created_at DESC', :dependent => :destroy
  has_many :invitations, :order => 'invitations.created_at DESC'

  belongs_to :inviter, :class_name => 'User'

  validates_presence_of :login, :email
  validates_length_of :login, :maximum => 15
  validates_format_of :login, :with => /^[a-zA-Z0-9\_]*?$/, :message => "can only contain letters, numbers and _"
  validates_format_of :login, :with => /^[a-zA-Z]/, :message => "must begin with a letter"
  validates_uniqueness_of :login, :email
  
  before_save :ensure_authentication_token

  def to_param
    login
  end

  def to_s
    login
  end
  
  def already_likes?(sandwich)
    self.likes.find(:all, :conditions => ['sandwich_id = ?', sandwich.id]).size > 0
  end

end
