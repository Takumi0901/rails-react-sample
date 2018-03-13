// @flow
import React from "react"
import Card from 'material-ui/Card/Card'
import CardTitle from 'material-ui/Card/CardTitle'
import UpdateBookFields from '../molecules/UpdateBookFields'
import { Form, Field } from 'react-final-form'
import UpdateBookActions from '../molecules/UpdateBookActions'
import SnackbarWithMessage from '../atoms/SnackbarWithMessage'


type Props = {
  card: Object,
  onSubmit: Object,
  onDelete: Object,
  bookItem: any,
  errors: Object,
  succeeded: boolean,
  deleted: boolean
}

const UpdateBookContent = ({card, onSubmit, onDelete, bookItem, errors, succeeded, deleted}: Props) => {
  const initialValues = {
    name: bookItem && bookItem.name,
    description: bookItem && bookItem.description,
    author: bookItem && bookItem.author,
    url: bookItem && bookItem.url
  }

  return (
    <Card>
      <CardTitle title={card.title} subtitle={card.subtitle}/>
      <Form
        initialValues={bookItem && initialValues}
        onSubmit={onSubmit.method}
        render={({ handleSubmit, pristine, invalid }) => (
          <form>
            <UpdateBookFields/>
            <UpdateBookActions onSubmit={onSubmit} onDelete={onDelete} handleSubmit={handleSubmit}/>
          </form>
        )}
      />
      <SnackbarWithMessage errors={errors} succeeded={succeeded} deleted={deleted}/>
    </Card>
  )
}

export default UpdateBookContent