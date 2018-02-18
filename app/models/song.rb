class Song < ActiveRecord::Base
    belongs_to :user
    belongs_to :setlist
    belongs_to :setlist_song
    

    
end