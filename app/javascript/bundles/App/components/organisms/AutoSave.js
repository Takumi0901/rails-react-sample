// @flow
import React from 'react'
import { FormSpy } from 'react-final-form'

type Props = {
  active: any,
  save: Function,
  values: Object
}

class AutoSave extends React.Component<Props> {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.active && this.props.active !== nextProps.active) {
      this.props.save(this.props.values)
    }
  }

  render() {
    return null
  }
}

type FormSpyProps = {
  setFieldData: Function,
  save: Function
}

export default (props: FormSpyProps) => {
  return <FormSpy {...props} component={AutoSave} />
}
