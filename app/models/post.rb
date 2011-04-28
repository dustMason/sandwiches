class Post < ActiveRecord::Base
  include ActionView::Helpers::TextHelper # truncate
  include ERB::Util # h

  attr_accessible :mp3, :title, :artist, :album

  mount_uploader :mp3, Mp3Uploader

  belongs_to :user
  belongs_to :sandwich

  validates_presence_of :user_id, :mp3
  validate :must_be_a_good_format
  
  def must_be_a_good_format
    errors.add(:base,"Sorry kids, we can only use mp3, m4a or mp4 files.") unless mp3.filename =~ /.mp4$|.m4a$|.mp3$/
  end

  def to_s
    sanitize(truncate("[#{h user}] #{h title} &mdash; #{h artist} &mdash; #{h album}", :length => 120))
  end
end