import { Outlet } from 'react-router-dom'
import Footer from '../Static/Footer'
import LandingPage from '../../Pages/LandingPage'
import MainHeader from '../Static/MainHeader'
const Layout = () => {
  return (
    <div>
      <MainHeader/>
      <Outlet/>
      <LandingPage/>
      <Footer/>
    </div>
  )
}

export default Layout
