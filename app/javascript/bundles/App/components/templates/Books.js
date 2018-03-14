// @flow
import React from 'react'
import {FETCH_ALL_BOOKS_QUERY} from '../../apollo/Books'
import FoundationHOC from '../../containers/hoc/FoundationHOC'
import UpdateBookContent from '../organisms/UpdateBookContent'

type Props = {
  createBook: Function,
  handleSubmit: Function,
  books: any
}

type State = {
  errors: Object,
  succeeded: boolean,
  deleted: boolean
}

class Books extends React.Component<Props, State> {
  constructor() {
    super()
    this.state = {
      succeeded: false,
      deleted: false,
      errors: {}
    }
  }

  onSubmit(values, e) {
    const {createBook} = this.props
    createBook({
      variables: {
        name: values.name,
        description: values.description,
        author: values.author,
        url: values.url
      },
      refetchQueries: [{
        query: FETCH_ALL_BOOKS_QUERY
      }]
    })
    .then(() => {
      e.reset()
      this.setState({
        succeeded: true,
        errors: {}
      })
    })
    .catch((errors) => {
      console.log(errors)
      this.setState({
        succeeded: false,
        errors: errors
      })
    })
  }

  render() {
    const {books} = this.props
    return (
      <UpdateBookContent
        {...this.state}
        book={false}
        books={books}
        card={{title: '本の登録', subtitle: '本の登録をします'}}
        onSubmit={{label: '登録する', method: this.onSubmit.bind(this)}}
        onDelete={{}}
      />
    )
  }
}

export default FoundationHOC(Books)
