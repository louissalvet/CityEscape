export enum WatchInvolvementActionTypes {
  trigger = 'WATCH_INVOLVEMENT_TRIGGER',
  failure = 'WATCH_INVOLVEMENT_FAILURE',
  update = 'WATCH_INVOLVEMENT_UPDATE'
}

export interface WatchInvolvementUpdateAction {
  type: WatchInvolvementActionTypes.update
  payload: {
    [id: string]: number
  }
}
