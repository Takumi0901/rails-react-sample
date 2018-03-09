// @flow
import React from "react"
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'
import CardActions from 'material-ui/Card/CardActions'

const UpdateBookActions = ({onSubmit, onDelete, handleSubmit}: {onSubmit: Object, onDelete: Object, handleSubmit: any}) => (
  <CardActions>
    {Object.keys(onSubmit).length > 0 &&
    <RaisedButton
      label={onSubmit.label}
      onClick={handleSubmit}
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