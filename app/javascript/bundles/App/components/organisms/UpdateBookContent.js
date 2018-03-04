import React from "react"
import {Card, CardTitle} from 'material-ui/Card'
import UpdateBookFields from '../molecules/UpdateBookFields'
import UpdateBookActions from '../molecules/UpdateBookActions'

const UpdateBookContent = ({card, onSubmit, onDelete}) => (
  <Card>
    <CardTitle title={card.title} subtitle={card.subtitle}/>
    <UpdateBookFields/>
    <UpdateBookActions onSubmit={onSubmit} onDelete={onDelete}/>
  </Card>
)

export default UpdateBookContent