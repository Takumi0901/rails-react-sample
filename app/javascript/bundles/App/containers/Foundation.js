// Simple example of a React "smart" component

import { connect } from 'react-redux';
import Foundation from '../components/Foundation';
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
  return ({})
}

export default compose(connect(mapStateToProps, actions),
  graphql(fetchAllBooks, {
    props: ({ data }) => ({
      allBooks: data.allBooks
    })
  })
)(Foundation);
