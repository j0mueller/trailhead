class WishlistHike < ApplicationRecord
  belongs_to :wishlist
  belongs_to :hike
end
