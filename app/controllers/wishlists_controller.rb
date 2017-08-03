class WishlistsController < ApplicationController
  before_action :authenticate_user!

  def show
    wishlist = Wishlist.where(user_id: current_user.id)
    # @wishlist_hikes = @wishlist.hikes
    @hikes = wishlist.hikes
  end

  def wishlist_hikes
    list = Wishlist.find(params[:id])
    hikes = Wishlist_hikes.where(wishlist_id: list.id)
  end
end
