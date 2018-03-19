import Books from '../../components/templates/Books'
import { graphql, compose } from 'react-apollo'
import {FETCH_ALL_BOOKS_QUERY, CREATE_BOOK_MUTATION} from '../../actions/Books'
import {FETCH_ALL_CATEGORIES_QUERY} from "../../actions/Category"

export default compose(
  graphql(FETCH_ALL_BOOKS_QUERY, {
    name: 'books'
  }),
  graphql(CREATE_BOOK_MUTATION, {
    name: 'createBook'
  }),
  graphql(FETCH_ALL_CATEGORIES_QUERY, {
    name: 'categories'
  })
)(Books)
