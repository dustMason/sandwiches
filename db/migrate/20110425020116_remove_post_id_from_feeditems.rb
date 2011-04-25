class RemovePostIdFromFeeditems < ActiveRecord::Migration
  def self.up
    remove_column :feed_items, :post_id
    remove_column :feed_items, :post_created_at
    add_column :feed_items, :sandwich_id, :integer
    add_column :feed_items, :sandwich_created_at, :timestamp
  end

  def self.down
    add_column :feed_items, :post_id, :integer
    add_column :feed_items, :post_created_at, :timestamp
    remove_column :feed_items, :sandwich_id
    remove_column :feed_items, :sandwich_created_at
  end
end
