import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMovieCard } from "../types";

interface MoviesState {
  data: IMovieCard[]
}

const initialState: MoviesState = {
  data: [
    {
      id: 1,
      img: "https://avatars.mds.yandex.net/get-afishanew/23114/1b65ed28-dcdb-40da-b4fd-ef7d35e12cb0/s190x280",
      title: "Паранормальное явление",
      genre: "Драма"
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/get-afishanew/23114/1b65ed28-dcdb-40da-b4fd-ef7d35e12cb0/s190x280",
      title: "Паранормальное явление 2",
      genre: "Комедия"
    },
    {
      id: 3,
      img: "https://avatars.mds.yandex.net/get-afishanew/23114/1b65ed28-dcdb-40da-b4fd-ef7d35e12cb0/s190x280",
      title: "Паранормальное явление 3",
      genre: "Ужасы"
    }
  ]
}

const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {
    setMovieTitle: (state, action: PayloadAction<{ id: number, title: string }>) => {
      const { id, title } = action.payload
      const updatedMovies = state.data.map((movie) => {
        if (movie.id === id) {
          movie.title = title
          return movie
        }
        return movie
      })

      state.data = updatedMovies
    }
  }
})

export const { setMovieTitle } = moviesSlice.actions
export const moviesReducer = moviesSlice.reducer
