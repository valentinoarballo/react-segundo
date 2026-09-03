import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Products from './pages/Products'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='min-h-screen flex flex-col justify-between bg-zinc-900 text-zinc-100'>



      <Navbar />

      <Routes>

        <Route path='/' element={ <Home /> }/>


        <Route path='/products' element={ <Products /> }/>


        <Route path='/about' element={ <About /> }/>


      </Routes>

      <Footer />

    </div>
  )
}

export default App
