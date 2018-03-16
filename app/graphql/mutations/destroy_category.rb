Mutations::DestroyCategory = GraphQL::Relay::Mutation.define do
  name "DestroyCategory"

  input_field :id, !types.ID

  return_field :category, Types::BookType

  resolve ->(_obj, args, ctx) {
    begin
      category = Category.find_by_id(args[:id])
      category.deleted = true
      category.save
    rescue => e
      return GraphQL::ExecutionError.new(e.message)
    end

    { category: category }
  }
end
