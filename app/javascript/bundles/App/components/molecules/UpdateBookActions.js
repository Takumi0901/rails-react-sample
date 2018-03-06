// @flow
import React from "react"
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'
import CardActions from 'material-ui/Card/CardActions'

const UpdateBookActions = ({onSubmit, onDelete}: {onSubmit: Object, onDelete: Object}) => (
  <CardActions>
    {onSubmit &&
    <RaisedButton
      label={onSubmit.label}
      onClick={onSubmit.method}
      primary={true}
    />
    }
    {onDelete &&
    <RaisedButton
      label={onDelete.label}
      onClick={onDelete.method}
      secondary={true}
    />
    }
  </CardActions>
)

export default UpdateBookActions