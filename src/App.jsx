import { Route, Routes } from 'react-router'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Country from './Pages/Country'
import Contact from './Pages/Contact'
import Pagenotfound from './Pages/Pagenotfound'
import Footer from './Components/Footer'
import CountryDetail from './Pages/CountryDetail'

function App() {

  return ( 
    <>
      <div>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/country' element={<Country />} />
            <Route path='/country/:id' element={<CountryDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />

            {/* <Route path='/*' element={<Pagenotfound />} /> */}
          </Routes>
          <Footer />
      </div>
    </>
  )
}

      export default App
