class Setlist < ActiveRecord::Base
    belongs_to :user
    has_many :setlist_songs
    has_many :songs, through: :setlist_songs
   

    def songs_attributes=(songs_attributes)
        songs_attributes.values.each do |songs_attributes|
          self.songs.build(songs_attributes)
        end
      end
end