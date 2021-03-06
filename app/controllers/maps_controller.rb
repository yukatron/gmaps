class MapsController < ApplicationController

  def index
  	@map = Map.new
  	@maps = Map.all
  end

  def create
  	@map = Map.new(map_params)
  	if @map.save
  	 redirect_to map_path(@map)
    else
      @maps = Map.all
      render :index
    end
  end

  def show
  	@map = Map.find(params[:id])
  end

  def destroy
  	@map = Map.find(params[:id])
  	@map.destroy
  	redirect_to root_path
  end

  private
  def map_params
  	params.require(:map).permit(:name, :address, :longitude, :latitude)
  end
end
