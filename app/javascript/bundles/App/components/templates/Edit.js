// @flow
import React from 'react'
import {FETCH_ALL_BOOKS_QUERY, FETCH_BOOK_QUERY} from '../../apollo/Books'
import FoundationHOC from '../../containers/hoc/FoundationHOC'
import UpdateBookContent from '../organisms/UpdateBookContent'

type Props = {
  match: Object,
  updateBook: Function,
  history: Object,
  destroyBook: Function,
  handleSubmit: Function,
  book: Object
}

type State = {
  errors: Object,
  succeeded: boolean,
  deleted: boolean
}

class EditBook extends React.Component<Props, State> {
  constructor() {
    super()
    this.state = {
      succeeded: false,
      deleted: false,
      errors: {}
    }
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
    })
    .then(() => {
      this.setState({
        succeeded: true,
        deleted: false,
        errors: {}
      })
    })
    .catch((errors) => {
      console.log(errors)
      this.setState({
        succeeded: false,
        deleted: false,
        errors: errors
      })
    })
  }

  onClickDelete() {
    const {match, destroyBook} = this.props
    destroyBook({
      variables: {id: match.params.bookId},
      refetchQueries: [{
        query: FETCH_ALL_BOOKS_QUERY
      }]
    })
    .then(() => {
      this.setState({
        deleted: true,
        succeeded: false,
        errors: {}
      })
    })
    .catch((errors) => {
      console.log(errors)
      this.setState({
        deleted: false,
        succeeded: false,
        errors: errors
      })
    })
  }


  componentDidUpdate(prevProps, prevState) {
    if(prevState.deleted !== this.state.deleted && this.state.deleted) {
      setTimeout(() => this.props.history.push('/'), 1000)
    }
  }


  render() {
    const {book} = this.props
    return (
      <UpdateBookContent
        {...this.state}
        bookItem={book.item && book.item}
        card={{title: book.item && `${book.item.name}`, subtitle: '本の編集をします'}}
        onSubmit={{label: '変更する', method: this.onSubmit.bind(this)}}
        onDelete={{label: "削除する", method: this.onClickDelete.bind(this)}}
      />
    )
  }
}

export default FoundationHOC(EditBook)