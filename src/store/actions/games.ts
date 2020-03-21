export enum WatchGamesActionTypes {
  trigger = 'WATCH_GAMES_TRIGGER',
  failure = 'WATCH_GAMES_FAILURE',
  success = 'WATCH_GAMES_SUCCESS'
}

export interface WatchGamesSuccessAction {
  type: WatchGamesActionTypes.success
  payload: {
    id: string
    title: string
    description: string
    players: string[]
    slots: number
  }[]
}
