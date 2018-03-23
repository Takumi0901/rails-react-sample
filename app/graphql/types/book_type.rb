Types::BookType = GraphQL::ObjectType.define do
  name "Book"

  field :id, !types.ID
  field :name, !types.String
  field :category_id, !types.Int
  field :description, types.String
  field :author, types.String
  field :url, types.String
  field :picture, types.String
end
