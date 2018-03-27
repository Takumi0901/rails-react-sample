Mutations::CreatePostMutation = GraphQL::Relay::Mutation.define do
  name "CreatePostMutation"

  input_field :subject, !types.String
  input_field :book_id, !types.Int

  return_field :post, !Types::PostType

  resolve ->(_obj, inputs, ctx) {
    begin
      {post: Post.create(
          subject:inputs[:subject],
          book_id:inputs[:book_id]
      )}
    rescue => e
      return GraphQL::ExecutionError.new(e.message)
    end
  }
end
