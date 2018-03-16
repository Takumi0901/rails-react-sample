import { graphql, compose } from 'react-apollo'
import {withRouter} from 'react-router-dom'
import EditBook from "../../components/templates/Edit"
import {
  FETCH_ALL_BOOKS_QUERY, FETCH_BOOK_QUERY, UPDATE_BOOK_MUTATION, DESTROY_BOOK_MUTATION
} from '../../actions/Books'


export default withRouter(compose(
  graphql(FETCH_ALL_BOOKS_QUERY, {
    name: 'books'
  }),
  graphql(FETCH_BOOK_QUERY, {
    name: 'book',
    options: (ownProps) => ({
      variables: {
        id: parseInt(ownProps.match.params.bookId)
      }
    })
  }),
  graphql(UPDATE_BOOK_MUTATION, {
    name: 'updateBook'
  }),
  graphql(DESTROY_BOOK_MUTATION, {
    name: 'destroyBook'
  }),
)(EditBook))
