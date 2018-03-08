import gql from "graphql-tag"

export const FETCH_ALL_BOOKS_QUERY = gql`
  query {
    list {
      id
      name
      about
    }
  }
`

export const FETCH_BOOK_QUERY = gql`
  query fetchBook($id: ID!){
    item(id: $id) {
      id
      name
      about
    }
  }
`

export const CREATE_BOOK_MUTATION = gql`
  mutation CreateBook($name: String!, $about: String!) {
    CreateBook(input: {name: $name, about: $about}) {
      book {
        name
        about
      }
    }
  }
`

export const UPDATE_BOOK_MUTATION = gql`
  mutation UpdateBook($id: ID!, $name: String!, $about: String!) {
    UpdateBook(input: {id: $id, name: $name, about: $about}) {
      book {
        name
        about
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