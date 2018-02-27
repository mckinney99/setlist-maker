class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.string :comments
      t.string :song_url
      t.integer :user_id
    end
  end
end
