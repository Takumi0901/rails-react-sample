import { connect } from 'react-redux'
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

const mapStateToProps = (state) => {
  return ({ name: state.helloWorld.name })
}

export default compose(connect(mapStateToProps, actions),
  graphql(fetchAllBooks, {
    props: ({ data }) => ({
      allBooks: data.allBooks
    })
  })
)(Books);
