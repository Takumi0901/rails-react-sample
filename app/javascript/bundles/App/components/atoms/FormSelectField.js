// @flow
import React from 'react'
import SelectField from 'material-ui/SelectField/SelectField'
import MenuItem from 'material-ui/MenuItem/MenuItem'

type Props = {
  input: Object,
  floatingLabelText: string,
  fullWidth: number,
  meta: Object,
  list: Array<any>
}

const FormSelectField = (props: Props) => {
  return (
    <SelectField
      {...props.input}
      value={props.input.value}
      onChange={(e, index, value) => props.input.onChange(value)}
      floatingLabelText={props.floatingLabelText}
      fullWidth={props.fullWidth}
      errorText={props.meta && props.meta.touched && props.meta.error}
    >
      {props &&
        props.list &&
        props.list.map((e, index) => {
          return (
            <MenuItem key={index} value={parseInt(e.id)} primaryText={e.name} />
          )
        })}
    </SelectField>
  )
}

export default FormSelectField
