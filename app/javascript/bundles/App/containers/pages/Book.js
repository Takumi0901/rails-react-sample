import { connect } from 'react-redux'
import {reduxForm} from 'redux-form'
import {actions} from '../../redux/modules/HelloWorldReducer'
import { graphql, compose } from 'react-apollo'
import {withRouter} from 'react-router-dom'
import EditBook from "../../components/templates/Edit"
import {
  FETCH_ALL_BOOKS_QUERY, FETCH_BOOK_QUERY, UPDATE_BOOK_MUTATION, DESTROY_BOOK_MUTATION
} from '../../apollo/Books'


const mapStateToProps = (state) => {
  return ({ name: state.helloWorld.name })
}

let BookEditForm = reduxForm({
  form: 'bookEditForm',
  enableReinitialize: true
})(EditBook)


BookEditForm = connect(
  (state, props) => {
    const book = props.book && props.book.item
    const initialValues = {
      name: book && book.name,
      about: book && book.about
    }

    return {initialValues}
  }
)(BookEditForm)

export default withRouter(compose(connect(mapStateToProps, actions),
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
)(BookEditForm))
