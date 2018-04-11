// @flow
import React from 'react'
import { Form } from 'react-final-form'
import Card from 'material-ui/Card/Card'
import CardTitle from 'material-ui/Card/CardTitle'
import CreateFields from '../../molecules/category/CreateFields'
import UpdateActions from '../../molecules/UpdateActions'

type Props = {
  card: Object,
  onSubmit: Object,
  onDelete: Object
}

const CreateCategoryContent = (props: Props) => {
  return (
    <Card style={{ marginBottom: '24px' }}>
      <CardTitle title={props.card.title} subtitle={props.card.subtitle} />
      <Form
        onSubmit={props.onSubmit.method}
        render={({ handleSubmit }) => (
          <div>
            <CreateFields />
            <UpdateActions
              onSubmit={props.onSubmit}
              onDelete={props.onDelete}
              handleSubmit={handleSubmit}
            />
          </div>
        )}
      />
    </Card>
  )
}

export default CreateCategoryContent
