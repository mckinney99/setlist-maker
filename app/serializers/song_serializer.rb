class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :comments, :song_url, :user_id
end
