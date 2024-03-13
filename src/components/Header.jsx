import React from 'react'
import Logo from '../assets/logo.png'

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#"><img src={Logo} alt="/" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <a className="nav-link active text-danger" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="./service">Service</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-dark" href='./tracking'>Tracking </a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-dark" href='./contact'>Contact</a>
        </li>
      </ul>
    
      
        <a className="btn btn-danger" href='./contact' type="submit">Request A Quote</a>
      
    </div>
  </div>
</nav>

      
    </>
  )
}

export default Header