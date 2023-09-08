import { BrowserRouter, Route, Routes } from 'react-router-dom'
import style from './App.module.scss'
import { MainPage } from './pages/MainPage'
import { MoviePage } from './pages/MoviePage'
import { Provider } from 'react-redux'
import { store } from './store'

export const App = () => {
  return (
    <Provider store={store}>
      <div className={style.App}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/movie" element={<MoviePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
}
