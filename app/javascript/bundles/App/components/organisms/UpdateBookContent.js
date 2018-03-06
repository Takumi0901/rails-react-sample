// @flow
import React from "react"
import Card from 'material-ui/Card/Card'
import CardTitle from 'material-ui/Card/CardTitle'
import UpdateBookFields from '../molecules/UpdateBookFields'
import UpdateBookActions from '../molecules/UpdateBookActions'


type Props = {
  card: Object,
  onSubmit: Object,
  onDelete: Object
}

const UpdateBookContent = ({card, onSubmit, onDelete}: Props) => (
  <Card>
    <CardTitle title={card.title} subtitle={card.subtitle}/>
    <UpdateBookFields/>
    <UpdateBookActions onSubmit={onSubmit} onDelete={onDelete}/>
  </Card>
)

export default UpdateBookContent