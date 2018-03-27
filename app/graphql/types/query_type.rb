Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :book, Types::BookType do
    description "An example field added by the generator"
    argument :id, !types.ID
    resolve ->(obj, args, ctx) {
      Book.find(args[:id])
    }
  end

  field :books, types[Types::BookType] do
    description "An example field added by the generator"
    resolve ->(obj, args, ctx) {
      Book.active.order("id DESC")
    }
  end

  # field :posts, types[Types::PostType] do
  #   description "An example field added by the generator"
  #   argument :id, !types.ID
  #   resolve ->(obj, args, ctx) {
  #     Post.where(book_id: args[:id])
  #   }
  # end

  # field :post, types[Types::PostType] do
  #   description "An example field added by the generator"
  #   resolve ->(obj, args, ctx) {
  #     Post.order("id DESC")
  #   }
  # end

  field :categories, types[Types::CategoryType] do
    description "An example field added by the generator"
    resolve ->(obj, args, ctx) {
      Category.active.order("id DESC")
    }
  end
end
