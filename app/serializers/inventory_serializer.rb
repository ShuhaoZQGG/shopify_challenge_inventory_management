class InventorySerializer
  include JSONAPI::Serializer
  attributes :name, :description, :image_url, :quantity, :price, :warehouse_id, :group_id
end
