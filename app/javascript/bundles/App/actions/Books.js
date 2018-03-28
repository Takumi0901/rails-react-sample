import gql from "graphql-tag"

export const FETCH_ALL_BOOKS_QUERY = gql`
  query {
    books {
      id
      name
      picture
    }
  }
`

export const FETCH_BOOK_QUERY = gql`
  query fetchBook($id: ID!, $after: String){
    book(id: $id) {
      id
      name
      category_id
      description
      author
      url
      picture
      posts(id: $id, first: 3, after: $after) {
        edges {
          node {
            id
            subject
            created_at
          }
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`

export const CREATE_BOOK_MUTATION = gql`
  mutation CreateBook(
    $name: String!,
    $description: String,
    $author: String!,
    $categoryId: Int!,
    $url: String,
    $file: String
  ) {
    CreateBook(input: {
      name: $name,
      description: $description,
      author: $author,
      category_id: $categoryId,
      url: $url,
      file: $file
    }) {
      book {
        name
        category_id
        description
        author
        url
        picture
      }
    }
  }
`

export const UPDATE_BOOK_MUTATION = gql`
  mutation UpdateBook($id: ID!,
    $name: String!,
    $description: String,
    $author: String!,
    $categoryId: Int!,
    $url: String,
    $file: String
  ) {
    UpdateBook(input: {id: $id,
      name: $name,
      description: $description,
      author: $author,
      category_id: $categoryId,
      url: $url,
      file: $file
    }) {
      book {
        name
        category_id
        description
        author
        url
        picture
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