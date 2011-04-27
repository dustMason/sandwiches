class Post < ActiveRecord::Base
  include ActionView::Helpers::TextHelper # truncate
  include ERB::Util # h

  attr_accessible :mp3, :title, :artist, :album

  mount_uploader :mp3, Mp3Uploader

  belongs_to :user
  belongs_to :sandwich

  validates_presence_of :user_id, :mp3

  def to_s
    sanitize(truncate("[#{h user}] #{h title} &mdash; #{h artist} &mdash; #{h album}", :length => 120))
  end
end