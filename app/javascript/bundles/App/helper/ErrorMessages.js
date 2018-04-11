export const pushErrorMessage = ({ isError = false, succeeded, deleted }) => {
  if (isError) {
    return errorMessages.isError
  }
  if (succeeded) {
    return errorMessages.succeeded
  }
  if (deleted) {
    return errorMessages.deleted
  }

  return ''
}

const errorMessages = {
  isError: 'isError',
  succeeded: 'isSucceeded',
  deleted: 'isDeleted'
}
