class Book < ApplicationRecord
  scope :active, -> { where(deleted: false) }
end
