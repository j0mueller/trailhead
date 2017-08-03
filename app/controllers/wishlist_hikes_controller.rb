class WishlistHikesController < ApplicationController
  before_action :authenticate_user!

  def index
    @wishlist = WishlistHike.find(params[:wishlist_id])
    @hike = WishlistHike.find(params[:hike_id])
    @wishlist_hikes = @wishlist.wishlist_hikes
  end

  def show
    @wishlist = WishlistHike.find(params[:wishlist_id])
    @wishlist_hike = @wishlist.wishlist_hike(params[:id])
  end

  def new
  end

  def create
  end

  def edit
  end

  def destroy
  end

end
