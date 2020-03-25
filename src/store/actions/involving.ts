export enum WatchInvolvingActionTypes {
  trigger = 'WATCH_INVOLVING_TRIGGER',
  failure = 'WATCH_INVOLVING_FAILURE',
  update = 'WATCH_INVOLVING_UPDATE'
}

export enum ToggleInvolvingActionType {
  trigger = 'TOGGLE_INVOLVING_TRIGGER',
  failure = 'TOGGLE_INVOLVING_FAILURE',
  success = 'TOGGLE_INVOLVING_SUCCESS'
}

export interface WatchInvolvingUpdateAction {
  type: WatchInvolvingActionTypes.update
  payload: string[]
}

export interface ToggleInvolvingTriggerAction {
  type: ToggleInvolvingActionType.trigger
  payload: { id: string }
}
