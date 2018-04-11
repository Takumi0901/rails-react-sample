import { graphql, compose } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import DetailBook from '../../components/templates/DetailBook'
import { FETCH_ALL_BOOKS_QUERY, FETCH_BOOK_QUERY } from '../../actions/Books'
import { FETCH_ALL_CATEGORIES_QUERY } from '../../actions/Category'
import { CREATE_POST_MUTATION } from '../../actions/Post'

export default withRouter(
  compose(
    graphql(FETCH_ALL_BOOKS_QUERY, {
      name: 'booksData'
    }),
    graphql(FETCH_BOOK_QUERY, {
      name: 'bookData',
      options: ownProps => ({
        variables: {
          id: parseInt(ownProps.match.params.bookId)
        }
      })
    }),
    graphql(FETCH_ALL_CATEGORIES_QUERY, {
      name: 'categoryData'
    }),
    graphql(CREATE_POST_MUTATION, {
      name: 'createPost'
    })
  )(DetailBook)
)
