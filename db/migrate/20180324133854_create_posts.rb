class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.integer :book_id
      t.string :subject

      t.timestamps
    end
  end
end
