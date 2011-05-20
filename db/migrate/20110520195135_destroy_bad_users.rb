class DestroyBadUsers < ActiveRecord::Migration
  def self.up
    User.where(:login => nil).each{|u| u.destroy}
  end

  def self.down
  end
end
