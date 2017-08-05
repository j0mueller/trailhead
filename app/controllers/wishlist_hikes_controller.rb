class WishlistHikesController < ApplicationController
  before_action :authenticate_user!

  def index
    wishlist
    @wishlist_hikes = WishlistHike.where(wishlist_id: )
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
