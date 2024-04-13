import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services';
import Cart from './pages/Cart';

function App() {

  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
