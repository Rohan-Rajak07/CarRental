import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Footer from './components/Footer'
import Headers from './components/Headers'
import Cars from './pages/Cars/Cars'
import CarsDetails from './pages/Cars/CarsDetails'
import { ToastContainer} from 'react-toastify';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer/>
      <Headers/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cars" element={<Cars/>}></Route>
        <Route path="/cars/:id" element={<CarsDetails/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
