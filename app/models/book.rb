class Book < ApplicationRecord
  scope :active, -> { where(deleted: false) }
  has_many :posts
end
