export enum WatchCurrentUserActionTypes {
  trigger = 'WATCH_CURRENT_USER_TRIGGER',
  failure = 'WATCH_CURRENT_USER_FAILURE',
  success = 'WATCH_CURRENT_USER_SUCCESS'
}

export enum CompleteProfileActionTypes {
  trigger = 'COMPLETE_PROFILE_TRIGGER',
  failure = 'COMPLETE_PROFILE_FAILURE',
  success = 'COMPLETE_PROFILE_SUCCESS'
}

export interface WatchCurrentUserSuccessAction {
  type: WatchCurrentUserActionTypes.success
  payload: {
    exists: boolean
    profile: {
      pseudo: string
      photoURL: string
    } | null
  }
}

export interface CompleteProfileTriggerAction {
  type: CompleteProfileActionTypes.trigger
  payload: {
    pseudo: string
    photoURI: string | null
  }
}
