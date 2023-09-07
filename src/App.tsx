import { BrowserRouter, Route, Routes } from 'react-router-dom'
import style from './App.module.scss'
import { MainPage } from './pages/MainPage'
import { MoviePage } from './pages/MoviePage'

export interface AppProps {
}

export const App = () => {
  return (
    <div className={style.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
