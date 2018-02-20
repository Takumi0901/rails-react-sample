class RenameTable < ActiveRecord::Migration[5.1]
  def change
    rename_table :react_on_rails_sample, :rails_react_sample
  end
end
