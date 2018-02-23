Types::MutationType = GraphQL::ObjectType.define do
  name 'Mutation'
  field :UpdateBook, field: Mutations::UpdateBook.field
end