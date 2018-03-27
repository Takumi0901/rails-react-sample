Types::BookType = GraphQL::ObjectType.define do
  name "Book"

  field :id, !types.ID
  field :name, !types.String
  field :category_id, !types.Int
  field :description, types.String
  field :author, types.String
  field :url, types.String
  field :picture, types.String

  connection :posts, Types::PostType.connection_type do
    argument :id, types.ID
    resolve ->(_obj, args, _ctx) {
      Post.where(book_id: args[:id]).order("id DESC")
    }
  end
end
