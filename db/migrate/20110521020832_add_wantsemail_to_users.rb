class AddWantsemailToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :wants_email, :boolean, :default => 1
    User.update_all :wants_email => true
  end

  def self.down
    remove_column :users, :wants_email
  end
end
