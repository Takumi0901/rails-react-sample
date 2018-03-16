Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  # TODO: remove me
  field :testField, types.String do
    description "An example field added by the generator"
    resolve ->(obj, args, ctx) {
      "Hello World!"
    }
  end
  field :item, Types::BookType do
    description "An example field added by the generator"
    argument :id, !types.ID
    resolve ->(obj, args, ctx) {
      Book.find(args[:id])
    }
  end

  field :list, types[Types::BookType] do
    description "An example field added by the generator"
    resolve ->(obj, args, ctx) {
      Book.active.order("id DESC")
    }
  end

  field :categories, types[Types::CategoryType] do
    description "An example field added by the generator"
    resolve ->(obj, args, ctx) {
      Category.active.order("id DESC")
    }
  end
end
