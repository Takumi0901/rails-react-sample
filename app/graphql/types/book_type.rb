Types::BookType = GraphQL::ObjectType.define do
  name "Book"

  field :id, !types.ID
  field :name, !types.String
  field :description, types.String
  field :author, types.String
  field :url, types.String
end
