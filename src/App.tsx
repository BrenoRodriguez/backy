import { Route, Routes } from 'react-router-dom'
import Games from './pages/Games/Games'
import Home from './pages/Home/Home'

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/games'
          element={<Games />}
        />
      </Routes>
    </>
  )
}
