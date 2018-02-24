Mutations::DestroyBook = GraphQL::Relay::Mutation.define do
  name "DestroyBook"

  input_field :id, !types.ID

  return_field :book, Types::BookType
  return_field :errors, types.String

  resolve ->(_obj, args, ctx) {
    book = Book.find_by_id(args[:id])
    return { errors: 'Comment not found' } if book.nil?
    article = book
    book.destroy

    { book: article }
  }
end
