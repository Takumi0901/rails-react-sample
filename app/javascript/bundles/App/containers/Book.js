import { connect } from 'react-redux'
import {reduxForm} from 'redux-form'
import {actions} from '../redux/modules/HelloWorldReducer'
import { graphql, compose } from 'react-apollo'
import {withRouter} from 'react-router-dom'
import gql from 'graphql-tag'
import EditBook from "../components/Edit";

const fetchAllBooks = gql`
  query {
    allBooks {
      id
      name
      about
    }
  }
`

const fetchBook = gql`
  query fetchBook($id: ID!){
    book(id: $id) {
      id
      name
      about
    }
  }
`

const createBook = gql`
  mutation CreateBook($name: String!, $about: String!) {
    CreateBook(input: {name: $name, about: $about}) {
      book {
        name
        about
      }
    }
  }
`

const destroyBook = gql`
  mutation DestroyBook($id: ID!) {
    DestroyBook(input: {id: $id}) {
      book {id}
    }
  }
`

const updateBook = gql`
  mutation UpdateBook($id: ID!, $name: String!, $about: String!) {
    UpdateBook(input: {id: $id, name: $name, about: $about}) {
      book {
        name
        about
      }
    }
  }
`

const getBooks = graphql(fetchAllBooks, {
  props: ({ data }) => ({
    allBooks: data.allBooks
  })
})

const mapStateToProps = (state) => {
  return ({ name: state.helloWorld.name })
}

let BookEditForm = reduxForm({
  form: 'bookEditForm',
  enableReinitialize: true
})(EditBook)


BookEditForm = connect(
  (state, props) => {
    const book = props.book && props.book
    const initialValues = {
      name: book && book.name,
      about: book && book.about
    }

    return {initialValues}
  }
)(BookEditForm)

export default withRouter(compose(connect(mapStateToProps, actions),
  getBooks,
  graphql(fetchBook, {
    options: (ownProps) => ({
      variables: {
        id: parseInt(ownProps.match.params.bookId)
      }
    }),
    props: ({ data }) => ({
      book: data.book
    })
  }),
  graphql(createBook, {
    name: 'createBook'
  }),
  graphql(updateBook, {
    name: 'updateBook'
  }),
  graphql(destroyBook, {
    name: 'destroyBook'
  }),
)(BookEditForm))
