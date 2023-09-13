import { BuySeatsFromServer } from "./seat"

export interface Session {
  id: number
  movieId: number
  seatId: number
  time: string
  seat?: BuySeatsFromServer
}
