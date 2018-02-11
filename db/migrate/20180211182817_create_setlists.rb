class CreateSetlists < ActiveRecord::Migration
  def change
    create_table :setlists do |t|
      t.string :name
      t.string :comments
      t.integer :user_id
    end
  end
end
