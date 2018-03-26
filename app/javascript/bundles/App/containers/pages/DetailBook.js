import { graphql, compose } from 'react-apollo'
import {withRouter} from 'react-router-dom'
import DetailBook from "../../components/templates/DetailBook"
import {
  FETCH_ALL_BOOKS_QUERY, FETCH_BOOK_QUERY, FETCH_ALL_POSTS_QUERY
} from '../../actions/Books'
import {FETCH_ALL_CATEGORIES_QUERY} from "../../actions/Category"


export default withRouter(compose(
  graphql(FETCH_ALL_POSTS_QUERY, {
    name: 'postsData'
  }),
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
  graphql(FETCH_ALL_CATEGORIES_QUERY, {
    name: 'categoryData'
  })
)(DetailBook))
