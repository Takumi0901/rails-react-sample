Types::MutationType = GraphQL::ObjectType.define do
  name 'Mutation'
  field :CreateBook, field: Mutations::CreateBook.field
  field :UpdateBook, field: Mutations::UpdateBook.field
  field :DestroyBook, field: Mutations::DestroyBook.field
end