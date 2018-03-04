import PropTypes from 'prop-types'
import React from 'react'
import {FETCH_ALL_BOOKS_QUERY, FETCH_BOOK_QUERY} from '../../apollo/Books'
import FoundationHOC from '../organisms/FoundationHOC'
import UpdateBookContent from '../molecules/UpdateBookContent'

class EditBook extends React.Component {
  constructor() {
    super()
  }

  onSubmit(values) {
    const {match, updateBook} = this.props
    updateBook({
      variables: {id: match.params.bookId, name: values.name, about: values.about},
      refetchQueries: [{
        query: FETCH_BOOK_QUERY,
        variables: {
          id: match.params.bookId
        }
      }]
    })
  }

  onClickDelete() {
    const {match, history, destroyBook} = this.props
    destroyBook({
      variables: {id: match.params.bookId},
      refetchQueries: [{
        query: FETCH_ALL_BOOKS_QUERY
      }]
    })
    history.push('/')
  }

  render() {
    const {book, handleSubmit} = this.props
    return (
      <UpdateBookContent
        card={{title: book.item && `${book.item.name}`, subtitle: '本の編集をします'}}
        onSubmit={{label: '変更する', method: handleSubmit(this.onSubmit.bind(this))}}
        onDelete={{label: "削除する", method: this.onClickDelete.bind(this)}}
      />
    )
  }
}

export default FoundationHOC(EditBook)