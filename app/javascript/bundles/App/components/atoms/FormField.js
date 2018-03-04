import React from "react"
import TextField from 'material-ui/TextField'

const FormField = (props) => (
  <TextField
    {...props.input}
    hintText={props.hintText}
    floatingLabelText={props.floatingLabelText}
    floatingLabelFixed={props.floatingLabelFixed}
    fullWidth={props.fullWidth}
    multiLine={props.multiLine}
    rows={props.row}
    rowsMax={props.rowsMax}
  />
)

export default FormField