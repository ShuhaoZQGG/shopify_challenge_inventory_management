module Api
  module V1
    class WarehousesController < ApplicationController
      skip_before_action :verify_authenticity_token
      # GET /api/v1/warehouses
      def index
        warehouses = Warehouse.all.order(:id)

        render json: WarehouseSerializer.new(warehouses).serializable_hash.to_json
      end

      # GET /api/v1/warehouses/:id
      def show
        warehouse = Warehouse.find_by(id: params[:id])

        render json: WarehouseSerializer.new(warehouse).serializable_hash.to_json
      end

      # POST /api/v1/warehouses
      def create
        warehouse = Warehouse.new(warehouse_params)

        if warehouse.save
          render json: WarehouseSerializer.new(warehouse).serializable_hash.to_json
        else
          render json: { error: warehouse.errors.messages }, status: 422
        end

      end
      
      # PATCH /api/v1/warehouses/:id
      def update
        warehouse = Warehouse.find_by(id: params[:id])
        
        if warehouse.update(warehouse_params)
          render json: WarehouseSerializer.new(warehouse).serializable_hash.to_json
        else
          render json: { error: warehouse.errors.messages }, status: 422
        end
      end

      # DELETE /api/v1/warehouses/:id
      def destroy
        warehouse = Warehouse.find_by(id: params[:id])

        if warehouse.destroy
          head :no_content
        else
          render json: { error: warehouse.errros.messages }, status: 422
        end
      end

      # private
      def warehouse_params
        params.require(:warehouse).permit(:name, :address)
      end
    end
  end
end