import { AppState } from '../'

export const uidSelector = ({ auth }: AppState) => auth.data.uid
