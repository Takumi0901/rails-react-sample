import gql from "graphql-tag"

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($subject: String!, $book_id: Int!) {
    CreatePost(input: {subject: $subject, book_id: $book_id}) {
      post {
        subject
        book_id
      }
    }
  }
`