class Hike < ApplicationRecord
  has_many :user_hikes
  has_many :users, through: :user_hikes

  validates :name, presence: true
end
