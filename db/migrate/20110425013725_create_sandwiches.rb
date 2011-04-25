class CreateSandwiches < ActiveRecord::Migration
  def self.up
    create_table :sandwiches do |t|
      t.string :name
      t.integer :user_id
      t.integer :play_count

      t.timestamps
    end
  end

  def self.down
    drop_table :sandwiches
  end
end
