Types::PostType = GraphQL::ObjectType.define do
  name "Post"
  field :id, types.ID
  field :book_id, types.Int
  field :subject, types.String
  field :created_at, types.String
end
