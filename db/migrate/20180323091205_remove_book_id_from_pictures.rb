class RemoveBookIdFromPictures < ActiveRecord::Migration[5.1]
  def change
    remove_column :pictures, :book_id, :integer
  end
end
