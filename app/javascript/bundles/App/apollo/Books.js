import gql from "graphql-tag"

export const FETCH_ALL_BOOKS_QUERY = gql`
  query {
    list {
      id
      name
    }
  }
`

export const FETCH_BOOK_QUERY = gql`
  query fetchBook($id: ID!){
    item(id: $id) {
      id
      name
      description
      author
      url
    }
  }
`

export const CREATE_BOOK_MUTATION = gql`
  mutation CreateBook($name: String!, $description: String, $author: String, $url: String) {
    CreateBook(input: {name: $name, description: $description, author: $author, url: $url}) {
      book {
        name
        description
        author
        url
      }
    }
  }
`

export const UPDATE_BOOK_MUTATION = gql`
  mutation UpdateBook($id: ID!, $name: String!, $description: String, $author: String, $url: String) {
    UpdateBook(input: {id: $id, name: $name, description: $description, author: $author, url: $url}) {
      book {
        name
        description
        author
        url
      }
    }
  }
`

export const DESTROY_BOOK_MUTATION = gql`
  mutation DestroyBook($id: ID!) {
    DestroyBook(input: {id: $id}) {
      book {id}
    }
  }
`