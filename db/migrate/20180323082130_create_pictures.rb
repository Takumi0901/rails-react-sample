class CreatePictures < ActiveRecord::Migration[5.1]
  def change
    create_table :pictures do |t|
      t.integer :book_id
      t.string :path

      t.timestamps
    end
  end
end
