module Api
  module V1
    class GroupsController < ApplicationController
      skip_before_action :verify_authenticity_token
      # GET /api/v1/groups
      def index
        groups = Group.all.order(:id)

        render json: GroupSerializer.new(groups).serializable_hash.to_json
      end

      # GET /api/v1/groups/:id
      def show
        group = Group.find_by(id: params[:id])

        render json: GroupSerializer.new(group).serializable_hash.to_json
      end

      # POST /api/v1/groups
      def create
        group = Group.new(group_params)

        if group.save
          render json: GroupSerializer.new(group).serializable_hash.to_json
        else
          render json: { error: group.errors.messages }, status: 422
        end

      end
      
      # PATCH /api/v1/groups/:id
      def update
        group = Group.find_by(id: params[:id])
        
        if group.update(group_params)
          render json: GroupSerializer.new(group).serializable_hash.to_json
        else
          render json: { error: group.errors.messages }, status: 422
        end
      end

      # DELETE /api/v1/groups/:id
      def destroy
        group = Group.find_by(id: params[:id])

        if group.destroy
          head :no_content
        else
          render json: { error: group.errros.messages }, status: 422
        end
      end

      # private
      def group_params
        params.require(:group).permit(:name, :description)
      end
    end
  end
end