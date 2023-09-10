import { Movie } from "../types";
import { rtkApi } from "./rtkApi";

const moviesApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getAllMovies: build.query<Movie[], void>({
      query: () => 'movies',
    }),
    getMovieById: build.query<Movie, string>({
      query: (id) => `movies?id_like=${id}`,
      transformResponse: (data: Movie[]) => {
        return data[0]
      }
    }),
  }),
  overrideExisting: false,
})

export const { useGetAllMoviesQuery, useGetMovieByIdQuery } = moviesApi
