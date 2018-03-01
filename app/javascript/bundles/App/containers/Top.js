import { connect } from 'react-redux'
import {reduxForm} from 'redux-form'
import Books from '../components/Books'
import {actions} from '../redux/modules/HelloWorldReducer'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

const fetchAllBooks = gql`
  query {
    allBooks {
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

const getBooks = graphql(fetchAllBooks, {
  props: ({ data }) => ({
    allBooks: data.allBooks
  })
})

const mapStateToProps = (state) => {
  return ({ name: state.helloWorld.name })
}

let BookCreateForm = reduxForm({
  form: 'bookCreateForm',
  enableReinitialize: true
})(Books)

export default compose(connect(mapStateToProps, actions),
  getBooks,
  graphql(createBook, {
    name: 'createBook'
  }),
  graphql(destroyBook, {
    name: 'destroyBook'
  }),
)(BookCreateForm);
