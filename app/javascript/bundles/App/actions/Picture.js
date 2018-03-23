import gql from "graphql-tag"

export const UPDATE_PICTURE_MUTATION = gql`
  mutation UpdatePicture($path: File!) {
    UpdatePicture(input: {path: $path}) {
      picture {
        path
      }
    }
  }
`