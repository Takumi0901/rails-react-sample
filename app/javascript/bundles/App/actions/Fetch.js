export const FETCH_INITIAL_STATE = {
  succeeded: false,
  deleted: false,
  errors: {}
}

export const FETCH_SUCCEEDED_STATE = {
  succeeded: true,
  deleted: false,
  errors: {}
}

export const FETCH_DELETED_STATE = {
  succeeded: false,
  deleted: true,
  errors: {}
}

export const FETCH_IS_ERROR_STATE = (errors = {}) => {
  return ({
    succeeded: false,
    deleted: false,
    errors: errors
  })
}