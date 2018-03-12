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

class EditBook extends React.Component<Props> {
  constructor() {
    super()
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
    const {book} = this.props
    return (
      <UpdateBookContent
        bookItem={book.item && book.item}
        card={{title: book.item && `${book.item.name}`, subtitle: '本の編集をします'}}
        onSubmit={{label: '変更する', method: this.onSubmit.bind(this)}}
        onDelete={{label: "削除する", method: this.onClickDelete.bind(this)}}
      />
    )
  }
}

export default FoundationHOC(EditBook)