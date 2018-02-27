class Setlist < ActiveRecord::Base
    belongs_to :user
    has_many :setlist_songs
    has_many :songs, through: :setlist_songs

    
end