module Api
  module V1
    class InventoriesController < ApplicationController
      # GET /api/v1/inventories
      def index
        inventories = Inventory.all

        render json: InventorySerializer.new(inventories).serializable_hash.to_json
      end

      # GET /api/v1/inventories/:id
      def show
        inventory = Inventory.find_by(id: params[:id])

        render json: InventorySerializer.new(inventory).serializable_hash.to_json
      end

      # POST /api/v1/inventories
      def create
        inventory = Inventory.new(inventory_params)

        if inventory.save
          render json: InventoriesController.new(inventory).serializable_hash.to_json
        else
          render json: { error: inventory.errors.messages }, status: 422
        end

      end
      
      # PATCH /api/v1/inventories/:id
      def update
        inventory = Inventory.find_by(id: params[:id])
        
        if inventory.update(inventory_params)
          render json: InventorySerializer.new(inventory).serializable_hash.to_json
        else
          render json: { error: inventory.errors.messages }, status: 422
        end
      end

      # DELETE /api/v1/inventories/:id
      def destroy
        inventory = Inventory.find_by(id: params[:id])

        if inventory.destroy
          head :no_content
        else
          render json: { error: inventory.errros.messages }, status: 422
        end
      end

      private
      def inventory_params
        params.erquire(:inventory).permit(:name, :image_url, :price)
      end
    end
  end
end