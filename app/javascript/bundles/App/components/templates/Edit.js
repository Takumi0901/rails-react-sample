// @flow
import React from 'react'
import {FETCH_INITIAL_STATE, FETCH_SUCCEEDED_STATE, FETCH_DELETED_STATE, FETCH_IS_ERROR_STATE} from '../../actions/Fetch'
import {FETCH_ALL_BOOKS_QUERY, FETCH_BOOK_QUERY} from '../../actions/Books'
import FoundationHOC from '../../containers/hoc/FoundationHOC'
import UpdateContent from '../organisms/book/UpdateContent'


type Props = {
  match: Object,
  updateBook: Function,
  history: Object,
  destroyBook: Function,
  handleSubmit: Function,
  bookData: Object,
  booksData: any,
  categoryData: Object
}

type State = {
  errors: Object,
  succeeded: boolean,
  deleted: boolean
}

class EditBook extends React.Component<Props, State> {
  constructor() {
    super()
    this.state = {...FETCH_INITIAL_STATE, dropDownImage: {}}
  }

  onSubmit(values) {
    const {match, updateBook} = this.props
    updateBook({
      variables: {id: match.params.bookId, ...values},
      refetchQueries: [{
        query: FETCH_BOOK_QUERY,
        variables: {
          id: match.params.bookId
        }
      }]
    }).then(() => {
      this.setState(FETCH_SUCCEEDED_STATE)
    }).catch((errors) => {
      console.log(errors.message)
      this.setState(FETCH_IS_ERROR_STATE(errors))
    })
  }

  onClickDelete() {
    const {match, destroyBook} = this.props
    destroyBook({
      variables: {id: match.params.bookId},
      refetchQueries: [{
        query: FETCH_ALL_BOOKS_QUERY
      }]
    }).then(() => {
      this.setState(FETCH_DELETED_STATE)
    }).catch((errors) => {
      console.log(errors)
      this.setState(FETCH_IS_ERROR_STATE(errors))
    })
  }

  isSucceededDecision(prevSucceeded) {
    return prevSucceeded !== this.state.succeeded && this.state.succeeded
  }

  isDeletedDecision(prevDeleted) {
    return prevDeleted !== this.state.deleted && this.state.deleted
  }

  isErrorDecision(prevError) {
    return prevError !== this.props.bookData.error && this.props.bookData.error
  }

  onHandleSelect(files) {
    console.log('*****************')
    console.log(files[0].preview)
    console.log('*****************')
    this.setState({
      dropDownImage: files[0]
    })
  }

  onHandleRemove() {
    this.setState({
      dropDownImage: {}
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.isSucceededDecision(prevState.succeeded)) {
      setTimeout(() => this.setState(FETCH_INITIAL_STATE), 1000)
    }
    if(this.isDeletedDecision(prevState.deleted) || this.isErrorDecision(prevProps.bookData.error)) {
      setTimeout(() => this.props.history.push('/'), 1000)
    }
  }


  render() {
    const {bookData} = this.props
    return (
      <UpdateContent
        {...this.state}
        {...this.props}
        onHandleSelect={this.onHandleSelect.bind(this)}
        onHandleRemove={this.onHandleRemove.bind(this)}
        card={{title: bookData.book ? `${bookData.book.name}` : "no-title", subtitle: '本の編集をします'}}
        onSubmit={{label: '変更する', method: this.onSubmit.bind(this)}}
        onDelete={{label: "削除する", method: this.onClickDelete.bind(this)}}
      />
    )
  }
}

export default FoundationHOC(EditBook)