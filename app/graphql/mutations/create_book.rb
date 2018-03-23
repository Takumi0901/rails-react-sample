Mutations::CreateBook = GraphQL::Relay::Mutation.define do
  name "CreateBook"

  input_field :name, !types.String
  input_field :author, !types.String
  input_field :category_id, !types.Int
  input_field :description, types.String
  input_field :url, types.String
  input_field :file, types.String

  return_field :book, Types::BookType

  resolve ->(obj, args, ctx) {
    begin
      {book: Book.create(
          name:args[:name],
          author:args[:author],
          category_id:args[:category_id],
          description:args[:description],
          picture: args[:file],
          url:args[:url]
      )}
    rescue => e
      return GraphQL::ExecutionError.new(e.message)
    end
  }
end
