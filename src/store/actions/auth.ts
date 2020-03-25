export enum WatchAuthActionTypes {
  trigger = 'WATCH_AUTH_TRIGGER',
  failure = 'WATCH_AUTH_FAILURE',
  success = 'WATCH_AUTH_SUCCESS'
}

export enum SignInActionTypes {
  trigger = 'SIGN_IN_TRIGGER',
  failure = 'SIGN_IN_FAILURE',
  success = 'SIGN_IN_SUCCESS'
}

export enum SignOutActionTypes {
  trigger = 'SIGN_OUT_TRIGGER',
  failure = 'SIGN_OUT_FAILURE',
  success = 'SIGN_OUT_SUCCESS'
}

export interface WatchAuthSuccessAction {
  type: WatchAuthActionTypes.success
  payload: {
    isAuthenticated: boolean
    uid: string | null
  }
}

export interface SignInTriggerAction {
  type: SignInActionTypes.trigger
  payload: {
    email: string
    password: string
  }
}
