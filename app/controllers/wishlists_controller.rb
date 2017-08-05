class WishlistsController < ApplicationController
  before_action :authenticate_user!

  def show
    @wishlist = Wishlist.where(user_id: current_user.id)
    # @wishlist_hikes = @wishlist.hikes
    @wishlist_hikes = WishlistHike.where(wishlist_id: @wishlist)
    # @hikes = Hike.where(id: @wishlist_hikes.hike_id)
  end

  # def wishlist_hikes
  #   list = Wishlist.find(params[:id])
  #   hikes = Wishlist_hikes.where(wishlist_id: list.id)
  # end
end
