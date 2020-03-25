export enum FetchPlayerProfileActionTypes {
  trigger = 'FETCH_PLAYER_PROFILE_TRIGGER',
  failure = 'FETCH_PLAYER_PROFILE_FAILURE',
  success = 'FETCH_PLAYER_PROFILE_SUCCESS'
}

export enum CompletePlayerProfileActionTypes {
  trigger = 'COMPLETE_PLAYER_PROFILE_TRIGGER',
  failure = 'COMPLETE_PLAYER_PROFILE_FAILURE',
  success = 'COMPLETE_PLAYER_PROFILE_SUCCESS'
}

export interface FetchPlayerProfileSuccessAction {
  type: FetchPlayerProfileActionTypes.success
  payload: PlayerProfile | null
}

export interface CompleteProfileTriggerAction {
  type: CompletePlayerProfileActionTypes.trigger
  payload: {
    pseudo: string
    photoURI: string | null
  }
}
