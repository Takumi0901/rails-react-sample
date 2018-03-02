import React from "react"
import TextField from 'material-ui/TextField'

export default class FormField extends React.Component {
  render() {
    const {input, hintText, floatingLabelText, floatingLabelFixed, fullWidth, multiLine, row, rowsMax} = this.props
    return (
      <TextField
        {...input}
        hintText={hintText}
        floatingLabelText={floatingLabelText}
        floatingLabelFixed={floatingLabelFixed}
        fullWidth={fullWidth}
        multiLine={multiLine}
        rows={row}
        rowsMax={rowsMax}
      />
    )
  }
}