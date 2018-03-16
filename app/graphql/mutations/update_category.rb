Mutations::UpdateCategory = GraphQL::Relay::Mutation.define do
  name "UpdateCategory"

  input_field :id, !types.ID
  input_field :name, !types.String

  return_field :category, !Types::BookType



  resolve ->(_obj, args, ctx) {
    begin
      category = Category.find_by_id(args[:id])

      category.name = args[:name]
      category.save
    rescue => e
      return GraphQL::ExecutionError.new(e.message)
    end

    { category: category }
  }

end
