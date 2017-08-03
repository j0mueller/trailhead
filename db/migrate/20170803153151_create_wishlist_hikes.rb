class CreateWishlistHikes < ActiveRecord::Migration[5.1]
  def change
    create_table :wishlist_hikes do |t|
      t.belongs_to :wishlist
      t.belongs_to :hike

      t.timestamps
    end
  end
end
