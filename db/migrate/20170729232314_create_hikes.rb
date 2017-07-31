class CreateHikes < ActiveRecord::Migration[5.1]
  def change
    create_table :hikes do |t|
      t.string :name, null: false
      t.string :location
      t.string :description
      t.timestamps null: false
    end
  end
end
