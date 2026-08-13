import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {

  return (
    <div className='min-h-screen flex flex-col justify-between bg-zinc-900 text-zinc-100'>

      <Navbar />

      <Home />

      <Footer />
    
    </div>
  )
}

export default App
