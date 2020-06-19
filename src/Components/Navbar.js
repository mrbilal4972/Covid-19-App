import React from 'react'
import logo from '../Images/logo.jpg'


function Navbar() {
  return (
    <>
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
            <img src={logo} width="30" height="30" className="rounded-circle d-inline-block align-top mx-2" alt="logo" loading="lazy" />
            <strong className=''>COVID-19 Stats App</strong>
        </a>
        </nav>
    </>
  )
}

export default Navbar
