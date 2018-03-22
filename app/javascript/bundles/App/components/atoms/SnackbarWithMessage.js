// @flow
import React from "react"
import Snackbar from 'material-ui/Snackbar/index'
import {pushErrorMessage} from '../../helper/ErrorMessages'

type Props = {
  isError: boolean,
  succeeded: boolean,
  deleted: boolean
}

const SnackbarWithMessage = ({isError = false, succeeded, deleted}: Props) => {
  return (
    <Snackbar
      open={succeeded || deleted || isError}
      message={pushErrorMessage({isError, succeeded, deleted})}
      autoHideDuration={4000}
      bodyStyle={(isError || deleted) ? {background: "rgb(255, 64, 129)"} : {}}
    />
  )
}

export default SnackbarWithMessage