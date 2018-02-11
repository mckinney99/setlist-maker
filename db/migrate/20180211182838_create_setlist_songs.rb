class CreateSetlistSongs < ActiveRecord::Migration
  def change
    create_table :setlist_songs do |t|
      t.integer :setlist_id
      t.integer :song_id
    end
  end
end
