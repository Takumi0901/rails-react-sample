class Category < ApplicationRecord
  scope :active, -> { where(deleted: false) }
end
