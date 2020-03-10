import { FirebaseAuthTypes } from '@react-native-firebase/auth'

export enum WatchAuthActionTypes {
  trigger = 'WATCH_AUTH_TRIGGER',
  failure = 'WATCH_AUTH_FAILURE',
  success = 'WATCH_AUTH_SUCCESS'
}

export interface WatchAuthSuccessAction {
  type: WatchAuthActionTypes.success
  payload: FirebaseAuthTypes.User | null
}
