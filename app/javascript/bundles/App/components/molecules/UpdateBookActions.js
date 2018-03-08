// @flow
import React from "react"
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'
import CardActions from 'material-ui/Card/CardActions'

const UpdateBookActions = ({onSubmit, onDelete}: {onSubmit: Object, onDelete: Object}) => (
  <CardActions>
    {Object.keys(onSubmit).length > 0 &&
    <RaisedButton
      label={onSubmit.label}
      onClick={onSubmit.method}
      primary={true}
    />
    }
    {Object.keys(onDelete).length > 0 &&
    <RaisedButton
      label={onDelete.label}
      onClick={onDelete.method}
      secondary={true}
    />
    }
  </CardActions>
)

export default UpdateBookActions