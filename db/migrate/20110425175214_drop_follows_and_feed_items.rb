class DropFollowsAndFeedItems < ActiveRecord::Migration
  def self.up
    drop_table :feed_items
    drop_table :follows
  end

  def self.down
  end
end
