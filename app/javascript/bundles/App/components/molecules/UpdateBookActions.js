import React from "react"
import RaisedButton from 'material-ui/RaisedButton'
import {CardActions} from 'material-ui/Card'

export const UpdateBookActions = ({onSubmit, onDelete}) => (
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