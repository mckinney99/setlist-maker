class Song < ActiveRecord::Base
    belongs_to :user
    has_many :setlist_songs
    has_many :setlists, through: :setlist_songs
    
end