import { Link } from 'react-router-dom'
import Header from '../../components/container/Header/Header'

const Stats = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to='/settings'>Settings</Link>
          <Link to='/lists'>Lists</Link>
          <Link to='/games'>Games</Link>
          <Link to='/'>Home</Link>
        </nav>
      </Header>
    </>
  )
}

export default Stats
