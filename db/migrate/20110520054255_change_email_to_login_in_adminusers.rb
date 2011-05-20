class ChangeEmailToLoginInAdminusers < ActiveRecord::Migration
  def self.up
    rename_column :admin_users, :email, :login
  end

  def self.down
    rename_column :admin_users, :login, :email
  end
end
