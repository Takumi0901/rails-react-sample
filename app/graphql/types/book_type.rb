Types::BookType = GraphQL::ObjectType.define do
  name "Book"

  field :id, !types.ID
  field :name, !types.String
  field :about, !types.String
end
