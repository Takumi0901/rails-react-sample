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
  bookData: any,
  booksData: any,
  errors: Object,
  succeeded: boolean,
  deleted: boolean,
  categories: Array<any>
}

const UpdateBookContent = ({card, onSubmit, onDelete, bookData, booksData, errors, succeeded, deleted, categories}: Props) => {
  const initialValues = {
    name: bookData.book && bookData.book.name,
    description: bookData.book && bookData.book.description,
    author: bookData.book && bookData.book.author,
    categoryId: bookData.book && bookData.book.category_id,
    url: bookData.book && bookData.book.url
  }

  return (
    <Card>
      <CardTitle title={card.title} subtitle={card.subtitle}/>
      <Form
        initialValues={bookData.book && initialValues}
        onSubmit={onSubmit.method}
        render={({ handleSubmit }) => (
          <div>
            <UpdateFields categories={categories}/>
            <UpdateActions onSubmit={onSubmit} onDelete={onDelete} handleSubmit={handleSubmit}/>
          </div>
        )}
      />
      <SnackbarWithMessage
        isError={false}
        succeeded={succeeded}
        deleted={deleted}/>
    </Card>
  )
}

export default UpdateBookContent