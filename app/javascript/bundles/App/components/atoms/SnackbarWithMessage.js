// @flow
import React from "react"
import Snackbar from 'material-ui/Snackbar/index'

const SnackbarWithMessage = ({errors, succeeded, deleted}: {errors: Object, succeeded: boolean, deleted: boolean}) => {
  let text = ''
  if(succeeded) {
    text = "更新しました"
  } else if(Object.keys(errors).length > 0) {
    text = "isError"
  } else if(deleted) {
    text = "削除しました"
  }

  return (
    <Snackbar
      open={succeeded || deleted || Object.keys(errors).length > 0}
      message={text}
      autoHideDuration={4000}
      bodyStyle={(Object.keys(errors).length > 0 || deleted) ? {background: "rgb(255, 64, 129)"} : {}}
    />
  )
}

export default SnackbarWithMessage