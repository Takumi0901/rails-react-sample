Types::PictureType = GraphQL::ObjectType.define do
  name "Picture"
  field :id, !types.ID
  field :path, !types.String
end
