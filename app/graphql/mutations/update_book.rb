Mutations::UpdateBook = GraphQL::Relay::Mutation.define do
  name "UpdateBook"

  input_field :id, !types.ID
  input_field :name, !types.String
  input_field :about, !types.String

  return_field :book, !Types::BookType



  resolve ->(_obj, args, ctx) {
    begin
      book = Book.find_by_id(args[:id])

      book.name = args[:name]
      book.about = args[:about]
      book.save

      { book: book }

    rescue => e
      return GraphQL::ExecutionError.new(e.message)
    end
  }

end
