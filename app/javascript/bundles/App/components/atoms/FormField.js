// @flow
import React from "react"
import TextField from 'material-ui/TextField/TextField'

type Props = {
  input: Object,
  hintText: string,
  floatingLabelText: string,
  floatingLabelFixed: string,
  fullWidth: number,
  multiLine: boolean,
  row: number,
  rowsMax: number
}

const FormField = (props: Props) => (
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