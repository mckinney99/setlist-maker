class Setlist < ActiveRecord::Base
    belongs_to :user
    belongs_to :setlist_song
    has_many :songs
    
    def add_to_setlist(song)
        @setlist_song = Setlist_songs.create
        @setlist_song.song_id = @song.id 
        @setlist_song.user_id = current_user.id 
        @setlist_song.save    
    end

end