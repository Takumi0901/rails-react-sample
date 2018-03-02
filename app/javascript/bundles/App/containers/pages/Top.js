import { connect } from 'react-redux'
import {reduxForm} from 'redux-form'
import Books from '../../components/templates/Books'
import {actions} from '../../redux/modules/HelloWorldReducer'
import { graphql, compose } from 'react-apollo'
import {FETCH_ALL_BOOKS_QUERY, CREATE_BOOK_MUTATION} from '../../apollo/Books'

const mapStateToProps = (state) => {
  return ({ name: state.helloWorld.name })
}

let BookCreateForm = reduxForm({
  form: 'bookCreateForm',
  enableReinitialize: true
})(Books)

export default compose(connect(mapStateToProps, actions),
  graphql(FETCH_ALL_BOOKS_QUERY, {
    name: 'books'
  }),
  graphql(CREATE_BOOK_MUTATION, {
    name: 'createBook'
  })
)(BookCreateForm)
