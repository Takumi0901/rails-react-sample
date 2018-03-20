// @flow
import React from 'react'
import {FETCH_INITIAL_STATE, FETCH_SUCCEEDED_STATE, FETCH_IS_ERROR_STATE} from '../../actions/Fetch'
import {FETCH_ALL_BOOKS_QUERY} from '../../actions/Books'
import FoundationHOC from '../../containers/hoc/FoundationHOC'
import UpdateContent from '../organisms/book/UpdateContent'

type Props = {
  createBook: Function,
  handleSubmit: Function,
  bookData: any,
  categoryData: Object
}

type State = {
  errors: Object,
  succeeded: boolean,
  deleted: boolean
}

class Books extends React.Component<Props, State> {
  constructor() {
    super()
    this.state = FETCH_INITIAL_STATE
  }

  onSubmit(values, e) {
    const {createBook} = this.props
    createBook({
      variables: {...values},
      refetchQueries: [{
        query: FETCH_ALL_BOOKS_QUERY
      }]
    }).then(() => {
      e.reset()
      this.setState(FETCH_SUCCEEDED_STATE)
    }).catch((errors) => {
      console.log(errors)
      this.setState(FETCH_IS_ERROR_STATE(errors))
    })
  }

  render() {
    const {bookData, categoryData} = this.props
    return (
      <UpdateContent
        {...this.state}
        bookData={false}
        booksData={bookData}
        categories={categoryData.categories}
        card={{title: '本の登録', subtitle: '本の登録をします'}}
        onSubmit={{label: '登録する', method: this.onSubmit.bind(this)}}
        onDelete={{}}
      />
    )
  }
}

export default FoundationHOC(Books)
