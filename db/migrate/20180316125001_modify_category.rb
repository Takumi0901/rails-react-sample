class ModifyCategory < ActiveRecord::Migration[5.1]
  def change
    add_column :categories, :deleted, :boolean, null: false, default: false
  end
end
