class Api::V1::HikesController < ApplicationController
  # skip_before_action :verify_authenticity_token

  def index
    render json: Hike.all, adapter: :json
  end

end
