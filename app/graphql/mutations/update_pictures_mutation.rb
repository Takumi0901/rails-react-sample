Mutations::UpdatePicturesMutation = GraphQL::Relay::Mutation.define do
  name "UpdatePicturesMutation"

  input_field :path, !Types::Scalars::FileType

  return_field :picture, Types::PictureType

  resolve ->(obj, args, ctx) {
    begin
      uploaded_file = args[:path]
      output_path = Rails.root.join('public/assets/images', uploaded_file.original_filename)

      File.open(output_path, 'w+b') do |fp|
        fp.write  uploaded_file.read
      end
      {picture: Picture.create(
          path: uploaded_file.original_filename
      )}
    rescue => e
      return GraphQL::ExecutionError.new(e.message)
    end
  }
end
