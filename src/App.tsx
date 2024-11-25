import { Route, Routes } from 'react-router-dom'
import Games from './pages/Games/Games'
import Home from './pages/Home/Home'
import Stats from './pages/Stats/Stats'

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
        <Route
          path='/stats'
          element={<Stats />}
        />
      </Routes>
    </>
  )
}
