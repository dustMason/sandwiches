class AddSandwichidToPosts < ActiveRecord::Migration
  def self.up
    add_column :posts, :sandwich_id, :integer
  end

  def self.down
    remove_column :posts, :sandwich_id
  end
end
