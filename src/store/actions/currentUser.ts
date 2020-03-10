export enum WatchCurrentUserActionTypes {
  trigger = 'WATCH_CURRENT_USER_TRIGGER',
  failure = 'WATCH_CURRENT_USER_FAILURE',
  success = 'WATCH_CURRENT_USER_SUCCESS'
}

export interface WatchCurrentUserSuccessAction {
  type: WatchCurrentUserActionTypes.success
  payload: {
    exists: boolean
    profile: {
      displayName: string
      phoneNumber: string
    } | null
  } | null
}
