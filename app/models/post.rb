class Post < ActiveRecord::Base
  include ActionView::Helpers::TextHelper # truncate
  include ERB::Util # h

  attr_accessible :mp3, :title, :artist, :album

  # mount_uploader :mp3, Mp3Uploader

  belongs_to :user
  belongs_to :sandwich

  validates_presence_of :user_id, :mp3
  validate :must_be_a_good_format
  
  def must_be_a_good_format
    errors.add(:base,"Sorry kids, we can only use mp3, m4a or mp4 files.") unless mp3 =~ /.mp4$|.m4a$|.mp3$/
  end

  def to_s
    sanitize(truncate("[#{h user}] #{h title} &mdash; #{h artist} &mdash; #{h album}", :length => 120))
  end
  
  def mp3_url
    out = "http://#{CONFIG['s3_bucket_name']}.s3.amazonaws.com/"
    out += "#{CONFIG['s3_folder']}/" if CONFIG['s3_folder']
    out += mp3
    out
  end
  
end