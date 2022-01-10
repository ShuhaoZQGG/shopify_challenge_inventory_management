class WarehouseSerializer
  include JSONAPI::Serializer
  attributes :name, :address
end
