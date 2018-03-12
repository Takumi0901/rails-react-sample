class RenameAboutColumnToBooks < ActiveRecord::Migration[5.1]
  def change
    rename_column :books, :about, :description
  end
end
