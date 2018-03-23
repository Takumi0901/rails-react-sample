Mutations::UpdateBook = GraphQL::Relay::Mutation.define do
  name "UpdateBook"

  input_field :id, !types.ID
  input_field :name, !types.String
  input_field :author, !types.String
  input_field :category_id, !types.Int
  input_field :description, types.String
  input_field :url, types.String
  input_field :file, types.String

  return_field :book, !Types::BookType



  resolve ->(_obj, args, ctx) {
    begin
      book = Book.find_by_id(args[:id])
      book.name = args[:name]
      book.description = args[:description]
      book.category_id = args[:category_id]
      book.author = args[:author]
      book.url = args[:url]
      book.picture = args[:file]
      book.save
    rescue => e
      return GraphQL::ExecutionError.new(e.message)
    end

    { book: book }
  }

end
