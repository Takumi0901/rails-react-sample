import gql from 'graphql-tag'

export const FETCH_ALL_CATEGORIES_QUERY = gql`
  query {
    categories {
      id
      name
    }
  }
`

export const CREATE_CATEGORY_MUTATION = gql`
  mutation CreateCategory($name: String!) {
    CreateCategory(input: { name: $name }) {
      category {
        name
      }
    }
  }
`

export const UPDATE_CATEGORY_MUTATION = gql`
  mutation UpdateCategory($id: ID!, $name: String!) {
    UpdateCategory(input: { id: $id, name: $name }) {
      category {
        name
      }
    }
  }
`

export const DESTROY_CATEGORY_MUTATION = gql`
  mutation DestroyCategory($id: ID!) {
    DestroyCategory(input: { id: $id }) {
      category {
        id
      }
    }
  }
`
