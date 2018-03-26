class SetlistSerializer < ActiveModel::Serializer
  attributes :id, :name, :comments, :user_id
end
