import { Reducer } from 'redux'

interface ActionTypesKind {
  trigger: string
  failure: string
  success?: string
  update?: string
}

interface State {
  loading: boolean
  error: boolean
  success: boolean
}

interface Action {
  type:
    | ActionTypesKind['trigger']
    | ActionTypesKind['failure']
    | ActionTypesKind['success']
    | ActionTypesKind['update']
}

const initialState: State = {
  loading: false,
  error: false,
  success: false
}

export default (actionTypes: ActionTypesKind): Reducer<State, Action> => (
  state = initialState,
  action
) => {
  switch (action.type) {
    case actionTypes.trigger:
      return { ...initialState, loading: true }
    case actionTypes.failure:
      return { ...initialState, error: true }
    case actionTypes.success:
      return { ...initialState, success: true }
    default:
      return { ...state }
  }
}
