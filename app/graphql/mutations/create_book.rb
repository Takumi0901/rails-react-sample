Mutations::CreateBook = GraphQL::Relay::Mutation.define do
  name "CreateBook"

  input_field :name, !types.String
  input_field :description, !types.String
  input_field :author, !types.String
  input_field :url, !types.String

  return_field :book, Types::BookType

  resolve ->(obj, args, ctx) {
    begin
      {book: Book.create(
          name:args[:name],
          description:args[:description],
          author:args[:author],
          url:args[:url]
      )}
    rescue => e
      return GraphQL::ExecutionError.new(e.message)
    end
  }
end
