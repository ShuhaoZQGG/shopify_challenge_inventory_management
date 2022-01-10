class GroupSerializer
  include JSONAPI::Serializer
  attributes :name, :description

  has_many :inventories
end
