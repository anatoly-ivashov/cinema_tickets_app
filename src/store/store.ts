import { configureStore } from '@reduxjs/toolkit'
import { moviesReducer } from '../slices'
import { rtkApi } from '../api/rtkApi'

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
