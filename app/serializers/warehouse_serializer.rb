class WarehouseSerializer
  include JSONAPI::Serializer
  attributes :name, :address

  has_many :inventories
end
