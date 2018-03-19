Mutations::CreateCategory = GraphQL::Relay::Mutation.define do
  name "CreateCategory"

  input_field :name, !types.String

  return_field :category, Types::BookType

  resolve ->(obj, args, ctx) {
    begin
      {category: Category.create(
          name:args[:name]
      )}
    rescue => e
      return GraphQL::ExecutionError.new(e.message)
    end
  }
end
