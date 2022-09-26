import { Outlet } from 'react-router-dom'

import Footer from '../pages/Website/Footer/Footer'
import Header from '../pages/Website/header/header'

type Props = {}

const WebLayout = (props: Props) => {
  return (
    <>
      <Header />
     
      
        <main>
          <Outlet />
        </main>
      <Footer/>
      </>
  )
}

export default WebLayout