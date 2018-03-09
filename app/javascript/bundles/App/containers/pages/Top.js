import {reduxForm} from 'redux-form'
import Books from '../../components/templates/Books'
import { graphql, compose } from 'react-apollo'
import {FETCH_ALL_BOOKS_QUERY, CREATE_BOOK_MUTATION} from '../../apollo/Books'

export default compose(
  graphql(FETCH_ALL_BOOKS_QUERY, {
    name: 'books'
  }),
  graphql(CREATE_BOOK_MUTATION, {
    name: 'createBook'
  })
)(Books)
