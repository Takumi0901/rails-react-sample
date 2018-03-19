Types::MutationType = GraphQL::ObjectType.define do
  name 'Mutation'
  field :CreateBook, field: Mutations::CreateBook.field
  field :UpdateBook, field: Mutations::UpdateBook.field
  field :DestroyBook, field: Mutations::DestroyBook.field

  field :CreateCategory, field: Mutations::CreateCategory.field
  field :UpdateCategory, field: Mutations::UpdateCategory.field
  field :DestroyCategory, field: Mutations::DestroyCategory.field
end