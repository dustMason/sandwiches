class AddIndexToLikes < ActiveRecord::Migration
  def self.up
    add_index :likes, [:user_id, :sandwich_id], :unique => true
  end

  def self.down
    remove_index :likes, [:user_id, :sandwich_id]
  end
end
