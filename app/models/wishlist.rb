class Wishlist < ApplicationRecord
  belongs_to :user
  has_many :wishlist_hikes
  has_many :hikes, through: :wishlist_hikes
end
