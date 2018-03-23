// @flow
import React from "react"
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'
import CardActions from 'material-ui/Card/CardActions'

type Props = {
  onSubmit: Object,
  onDelete: Object,
  handleSubmit: any
}

const UpdateActions = (props: Props) => (
  <CardActions>
    {Object.keys(props.onSubmit).length > 0 &&
    <RaisedButton
      label={props.onSubmit.label}
      onClick={props.handleSubmit}
      primary={true}
    />
    }
    {Object.keys(props.onDelete).length > 0 &&
    <RaisedButton
      label={props.onDelete.label}
      onClick={props.onDelete.method}
      secondary={true}
    />
    }
  </CardActions>
)

export default UpdateActions