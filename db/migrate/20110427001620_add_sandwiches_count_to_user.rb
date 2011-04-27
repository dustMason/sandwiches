class AddSandwichesCountToUser < ActiveRecord::Migration
  def self.up
    add_column :users, :sandwiches_count, :integer
    remove_column :users, :posts_count
    User.reset_column_information
    User.find(:all).each do |r| 
      User.update_counters r.id, :sandwiches_count => r.sandwiches.count
    end
  end

  def self.down
    remove_column :users, :sandwiches_count
    add_column :users, :posts_count, :integer
    User.reset_column_information
    User.find(:all).each do |r| 
      User.update_counters r.id, :posts_count => r.posts.count
    end
  end
end
