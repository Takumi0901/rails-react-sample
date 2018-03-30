// @flow
import React from "react"
import { Form } from 'react-final-form'
import Card from 'material-ui/Card/Card'
import CardTitle from 'material-ui/Card/CardTitle'
import UpdateFields from '../../molecules/book/UpdateFields'
import UpdateActions from '../../molecules/UpdateActions'
import ErrorHOC from '../../../containers/hoc/ErrorHOC'


type Props = {
  card: Object,
  onSubmit: Object,
  onDelete: Object,
  bookData: any,
  booksData: any,
  errors: Object,
  succeeded: boolean,
  deleted: boolean,
  categoryData: Object,
  onHandleSelect: Function,
  onHandleRemove: Function,
  previewImage: String
}

const UpdateBookContent = (props: Props) => {

  const initialValues = props.bookData.book ? {
    name: props.bookData.book.name,
    description: props.bookData.book.description,
    author: props.bookData.book.author,
    categoryId: props.bookData.book.category_id,
    url: props.bookData.book.url
  } : {}

  return (
    <Card>
      <CardTitle title={props.card.title} subtitle={props.card.subtitle}/>
      <Form
        initialValues={initialValues}
        onSubmit={props.onSubmit.method}
        render={({ handleSubmit }) => (
          <div>
            <UpdateFields
              categories={props.categoryData.categories}
              onHandleSelect={props.onHandleSelect}
              onHandleRemove={props.onHandleRemove}
              previewImage={props.previewImage}/>
            <UpdateActions
              onSubmit={props.onSubmit}
              onDelete={props.onDelete}
              handleSubmit={handleSubmit}/>
          </div>
        )}
      />
    </Card>
  )
}

export default ErrorHOC(UpdateBookContent)