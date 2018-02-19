const HELLO_WORLD_NAME_UPDATE = 'HELLO_WORLD_NAME_UPDATE'

export const actions = {
  updateName: (text) => ({
    type: HELLO_WORLD_NAME_UPDATE,
    text,
  })
}

export const helloWorldReducer = (state = {name: ''}, action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return {state, ...{name: action.text}}
    default:
      return state;
  }
}
