class MapsController < ApplicationController
  def index
  	@map = Map.new
  	@maps = Map.all
  end

  def create
  	map = Map.new(map_params)
  	map.save
  	redirect_to map_path(map)
  end

  def show
  	@map = Map.find(params[:id])
  end

  private
  def map_params
  	params.require(:map).permit(:name, :address)
  end
end
