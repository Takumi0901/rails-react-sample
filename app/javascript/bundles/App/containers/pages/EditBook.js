import { graphql, compose } from 'react-apollo'
import {withRouter} from 'react-router-dom'
import EditBook from "../../components/templates/EditBook"
import {
  FETCH_ALL_BOOKS_QUERY, FETCH_BOOK_QUERY, UPDATE_BOOK_MUTATION, DESTROY_BOOK_MUTATION
} from '../../actions/Books'
import {FETCH_ALL_CATEGORIES_QUERY} from "../../actions/Category"
import {UPDATE_PICTURE_MUTATION} from "../../actions/Picture"


export default withRouter(compose(
  graphql(FETCH_ALL_BOOKS_QUERY, {
    name: 'booksData'
  }),
  graphql(FETCH_BOOK_QUERY, {
    name: 'bookData',
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
  graphql(FETCH_ALL_CATEGORIES_QUERY, {
    name: 'categoryData'
  }),
  graphql(UPDATE_PICTURE_MUTATION, {
    name: 'updatePicture'
  })
)(EditBook))
