class SetlistSongsController < ApplicationController

    def destroy
        @setlist_songs = SetlistSong.find(params[:id])
        @setlist_songs.destroy
    end

end
