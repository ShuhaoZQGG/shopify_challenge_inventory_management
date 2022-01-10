module Api
  module V1
    class InventoriesController < ApplicationController
      def index
        inventories = Inventory.all

        render json: InventorySerializer.new(inventories).serializable_hash.to_json
      end

      def show
        inventory = Inventory.find_by(id: params[:id])

        render json: InventorySerializer.new(inventory).serializable_hash.to_json
      end
    end
  end
end