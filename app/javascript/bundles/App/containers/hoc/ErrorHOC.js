// @flow
import React from 'react'
import SnackbarWithMessage from '../../components/atoms/SnackbarWithMessage'

type Props = {
  bookData: any,
  booksData: any,
  categoryData: any,
  errors: Object,
  succeeded: boolean,
  deleted: boolean
}

type State = {
  isError: boolean
}

const ErrorHOC = (WrappedComponent: Object) => {
  class Error extends React.Component<Props, State> {
    constructor() {
      super()
      this.state = {
        isError: false
      }
    }

    errorCheck() {
      if(Object.keys(this.props.errors).length > 0) {
        this.setState({isError: true})
      }

      for (let i in this.props) {
        const obj = this.props[i]
        for (let k in obj) {
          if(obj['error']) {
            this.setState({isError: true})
          }
        }
      }
    }


    componentDidUpdate(prevProps, prevState) {
      if(prevProps !== this.props) this.errorCheck()
    }


    render() {
      const {succeeded, deleted} = this.props

      return (
        <div>
          <WrappedComponent {...this.props}/>
          <SnackbarWithMessage
            isError={this.state.isError}
            succeeded={succeeded}
            deleted={deleted}/>
        </div>
      )
    }
  }
  return Error
}

export default ErrorHOC