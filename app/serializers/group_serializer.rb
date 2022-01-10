class GroupSerializer
  include JSONAPI::Serializer
  attributes :name, :description
end
