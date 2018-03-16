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
  book: Object,
  books: any
}

type State = {
  errors: Object,
  succeeded: boolean,
  deleted: boolean
}

class EditBook extends React.Component<Props, State> {
  constructor() {
    super()
    this.state = FETCH_INITIAL_STATE
  }

  onSubmit(values) {
    const {match, updateBook} = this.props
    updateBook({
      variables: {
        id: match.params.bookId,
        name: values.name,
        description: values.description,
        author: values.author,
        url: values.url
      },
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
    return prevError !== this.props.book.error && this.props.book.error
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.isSucceededDecision(prevState.succeeded)) {
      setTimeout(() => this.setState(FETCH_INITIAL_STATE), 1000)
    }
    if(this.isDeletedDecision(prevState.deleted) || this.isErrorDecision(prevProps.book.error)) {
      setTimeout(() => this.props.history.push('/'), 1000)
    }
  }


  render() {
    const {book, books} = this.props
    return (
      <UpdateContent
        {...this.state}
        book={book}
        books={books}
        card={{title: book.item ? `${book.item.name}` : "no-title", subtitle: '本の編集をします'}}
        onSubmit={{label: '変更する', method: this.onSubmit.bind(this)}}
        onDelete={{label: "削除する", method: this.onClickDelete.bind(this)}}
      />
    )
  }
}

export default FoundationHOC(EditBook)