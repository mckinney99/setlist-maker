class Setlist < ActiveRecord::Base
    belongs_to :user
    has_many :setlist_songs
    has_many :songs, through: :setlist_songs
    
    def add_to_setlist(setlist_song)
        @setlist_song = Setlist_songs.create
        @setlist_song.song_id = @song.id 
        @setlist_song.user_id = current_user.id 
        @setlist_song.save   
    end

end