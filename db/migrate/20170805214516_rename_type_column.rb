class RenameTypeColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :user_hikes, :type, :list
  end
end
