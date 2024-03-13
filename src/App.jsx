
import Nav from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import Service from './components/Service'
import Tracking from './components/Tracking'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { userState} from 'react'
import axios from 'axios';


function App() {
  return (
    <div>
      <Nav/>
      <Router>
         <Routes>
           <Route exact path='/' element={<Home/>}/>
           <Route exact path='/service' element={<Service/>}/>
           <Route exact path='/tracking' element={<Tracking/>}/>
           <Route exact path='/contact' element={<Contact/>}/>
      
         </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App