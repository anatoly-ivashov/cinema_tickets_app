import { Actors } from "./actors"
import { Country } from "./country"

export interface IMovieCard {
  img: string
  title: string
  genre: string
}

export interface Movie extends IMovieCard {
  description: string
  times: string[]
  duration: number
  country: Country
  year: number
  actors: Actors[]
  premier: string
}
