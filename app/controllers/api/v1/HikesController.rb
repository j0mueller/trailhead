class Api::V1::HikesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @hikes = Hike.all
    render json: @hikes, adapter: :json
  end

  def show
    @hike = Hike.find(params[:hike_id])
    render json: @hike, adapter: :json
  end

  def new
    @hike = Hike.new
  end

  # Edit this!
  def create
    @hike = Hike.new(data['hike'])
    if @hike.save
      render json: data['hike']
    end
  end
end
