Mutations::DestroyBook = GraphQL::Relay::Mutation.define do
  name "DestroyBook"

  input_field :id, !types.ID

  return_field :book, Types::BookType

  resolve ->(_obj, args, ctx) {
    begin
      book = Book.find_by_id(args[:id])
      book.deleted = true
      book.save
    rescue => e
      return GraphQL::ExecutionError.new(e.message)
    end

    { book: book }
  }
end
