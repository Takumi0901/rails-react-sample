// @flow
import React from "react"
import { Form } from 'react-final-form'
import Card from 'material-ui/Card/Card'
import CardTitle from 'material-ui/Card/CardTitle'
import UpdateFields from '../../molecules/book/UpdateFields'
import UpdateActions from '../../molecules/UpdateActions'
import SnackbarWithMessage from '../../atoms/SnackbarWithMessage'


type Props = {
  card: Object,
  onSubmit: Object,
  onDelete: Object,
  book: any,
  books: any,
  errors: Object,
  succeeded: boolean,
  deleted: boolean
}

const UpdateBookContent = ({card, onSubmit, onDelete, book, books, errors, succeeded, deleted}: Props) => {
  const initialValues = {
    name: book.item && book.item.name,
    description: book.item && book.item.description,
    author: book.item && book.item.author,
    url: book.item && book.item.url
  }


  let err = []

  if(Object.keys(errors).length > 0) {
    err.push(errors.message)
  } else if(book.error) {
    err.push(book.error.message)
  } else if(books.error) {
    err.push(books.error.message)
  }

  return (
    <Card>
      <CardTitle title={card.title} subtitle={card.subtitle}/>
      <Form
        initialValues={book.item && initialValues}
        onSubmit={onSubmit.method}
        render={({ handleSubmit }) => (
          <div>
            <UpdateFields/>
            <UpdateActions onSubmit={onSubmit} onDelete={onDelete} handleSubmit={handleSubmit}/>
          </div>
        )}
      />
      <SnackbarWithMessage errors={err} succeeded={succeeded} deleted={deleted}/>
    </Card>
  )
}

export default UpdateBookContent