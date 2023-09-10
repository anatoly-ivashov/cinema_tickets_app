import { Actors } from "./actors"
import { Country } from "./country"
import { Time } from "./times"

export interface IMovieCard {
  id: number
  img: string
  title: string
  genre: string
}

export interface Movie extends IMovieCard {
  description: string
  times: Time[]
  duration: number
  country: Country
  year: number
  actors: Actors[]
  premier: string
}
