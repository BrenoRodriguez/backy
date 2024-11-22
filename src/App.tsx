import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Games from './pages/Games/Games'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/games' element={<Games />} />
      </Routes>
    </>
  )
}
