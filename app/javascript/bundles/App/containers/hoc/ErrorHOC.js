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
  open: boolean,
  docked: boolean
}

const ErrorHOC = (WrappedComponent: Object) => {
  class Error extends React.Component<Props, State> {
    constructor() {
      super()
    }

    render() {
      const {bookData, booksData, categoryData, succeeded, deleted, errors} = this.props
      return (
        <div>
          <WrappedComponent {...this.props}/>
          <SnackbarWithMessage
            isError={
              Object.keys(errors).length > 0 ||
              (bookData && bookData.error && bookData.error.message.length > 0) ||
              (booksData && booksData.error && booksData.error.message.length > 0) ||
              (categoryData && categoryData.error && categoryData.error.message.length > 0)
            }
            succeeded={succeeded}
            deleted={deleted}/>
        </div>
      )
    }
  }
  return Error
}

export default ErrorHOC