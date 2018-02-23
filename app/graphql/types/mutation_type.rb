Types::MutationType = GraphQL::ObjectType.define do
  name 'Mutation'
  field :CreateBook, field: Mutations::CreateBook.field
end