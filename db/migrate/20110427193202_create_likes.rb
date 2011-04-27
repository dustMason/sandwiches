class CreateLikes < ActiveRecord::Migration
  def self.up
    create_table :likes do |t|
      t.integer :user_id
      t.integer :sandwich_id
      t.timestamps
    end
    add_column :sandwiches, :likes_count, :integer, :default => 0
    add_column :users, :points, :integer, :default => 0
  end

  def self.down
    drop_table :likes
    remove_column :sandwiches, :likes_count
    remove_column :users, :points
  end
end
