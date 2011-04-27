class AddCommentsCountToSandwiches < ActiveRecord::Migration
  def self.up
    add_column :sandwiches, :comments_count, :integer, :default => 0
  end

  def self.down
    remove_column :sandwiches, :comments_count
  end
end
