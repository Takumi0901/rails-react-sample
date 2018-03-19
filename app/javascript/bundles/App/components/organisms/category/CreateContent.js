// @flow
import React from "react"
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

const CreateCategoryContent = ({card, onSubmit, onDelete}: Props) => {
  return (
    <Card style={{marginBottom: "24px"}}>
      <CardTitle title={card.title} subtitle={card.subtitle}/>
      <Form
        onSubmit={onSubmit.method}
        render={({ handleSubmit }) => (
          <div>
            <CreateFields/>
            <UpdateActions onSubmit={onSubmit} onDelete={onDelete} handleSubmit={handleSubmit}/>
          </div>
        )}
      />
    </Card>
  )
}

export default CreateCategoryContent