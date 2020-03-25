export enum FetchGamesActionTypes {
  trigger = 'FETCH_GAMES_TRIGGER',
  failure = 'FETCH_GAMES_FAILURE',
  success = 'FETCH_GAMES_SUCCESS'
}

export interface FetchGamesSuccessAction {
  type: FetchGamesActionTypes.success
  payload: Game[]
}
