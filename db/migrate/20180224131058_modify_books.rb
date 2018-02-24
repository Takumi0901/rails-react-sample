class ModifyBooks < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :deleted, :boolean, null: false, default: false
  end
end
