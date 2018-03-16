import Category from '../../components/templates/Category'
import { graphql, compose } from 'react-apollo'
import {FETCH_ALL_BOOKS_QUERY} from '../../actions/Books'
import {CREATE_CATEGORY_MUTATION, FETCH_ALL_CATEGORIES_QUERY, DESTROY_CATEGORY_MUTATION, UPDATE_CATEGORY_MUTATION} from '../../actions/Category'

export default compose(
  graphql(FETCH_ALL_BOOKS_QUERY, {
    name: 'books'
  }),
  graphql(FETCH_ALL_CATEGORIES_QUERY, {
    name: 'categories'
  }),
  graphql(CREATE_CATEGORY_MUTATION, {
    name: 'createCategory'
  }),
  graphql(UPDATE_CATEGORY_MUTATION, {
    name: 'updateCategory'
  }),
  graphql(DESTROY_CATEGORY_MUTATION, {
    name: 'destroyCategory'
  }),
)(Category)
