Mutations::CreateBook = GraphQL::Relay::Mutation.define do
  name "CreateBook"

  input_field :name, !types.String
  input_field :about, !types.String

  return_field :book, Types::BookType

  resolve ->(obj, args, ctx) {
    begin
      {book: Book.create(name:args[:name], about:args[:about])}
    rescue => e
      return GraphQL::ExecutionError.new(e.message)
    end
  }
end
