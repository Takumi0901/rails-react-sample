Mutations::UpdateBook = GraphQL::Relay::Mutation.define do
  name "UpdateBook"

  input_field :id, !types.ID
  input_field :name, !types.String
  input_field :description, types.String
  input_field :author, types.String
  input_field :url, types.String

  return_field :book, !Types::BookType



  resolve ->(_obj, args, ctx) {
    begin
      book = Book.find_by_id(args[:id])

      book.name = args[:name]
      book.description = args[:description]
      book.author = args[:author]
      book.url = args[:url]
      book.save
    rescue => e
      return GraphQL::ExecutionError.new(e.message)
    end

    { book: book }
  }

end
