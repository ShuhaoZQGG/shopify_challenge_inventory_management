module Api
  module V1
    class InventoriesController < ApplicationController
      skip_before_action :verify_authenticity_token
      # GET /api/v1/inventories
      def index
        inventories = Inventory.all.order(:id)

        render json: InventorySerializer.new(inventories).serializable_hash.to_json
        # MVC @inventories = Inventory.all
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
          render json: InventorySerializer.new(inventory).serializable_hash.to_json
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

      # private
      def inventory_params
        params.require(:inventory).permit(:name, :description, :image_url, :quantity, :price, :warehouse_id, :group_id)
      end
    end
  end
end