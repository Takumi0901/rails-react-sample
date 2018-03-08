// @flow
const HELLO_WORLD_NAME_UPDATE = 'HELLO_WORLD_NAME_UPDATE'

export const actions = {
  updateName: (text: string) => ({
    type: HELLO_WORLD_NAME_UPDATE,
    text
  })
}

export const helloWorldReducer = (state: Object = {name: ''}, action: Object) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return {state, ...{name: action.text}}
    default:
      return state
  }
}
