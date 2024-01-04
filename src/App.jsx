import React from 'react'
import { useState } from 'react'
import Home from './Components/Home'
import Stories from './Components/Stories'
import Features from './Components/Features'
import Pricing from './Components/Pricing'
import Data from './data.jsx'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  const [mobileMenu, setMobileMenu] = useState(false)

  function toggleMobileMenu(){
    setMobileMenu(prevState => !prevState)
  }

  console.log(Data)
  return (
    <BrowserRouter>
    <header>
      <nav>
        <Link onClick={toggleMobileMenu} className='site-logo' to="/">< img src={`assets/logo.svg`} alt="logo" /></Link>
        <div className="nav-link-container">
          <Link  className='nav-links' to="/stories">Stories</Link>
          <Link  className='nav-links' to="/features">Features</Link>
          <Link  className='nav-links' to="/pricing">Pricing</Link>
        </div>
        <button className='invite-btn'>Get An Invite</button>
        <svg className={`mobile-menu-icon ${mobileMenu ? 'inactive' : ''}`} onClick={toggleMobileMenu} xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 20 6" fill="none">
          <rect width="20" height="1" fill="black"/>
          <rect y="5" width="20" height="1" fill="black"/>
        </svg>

        <svg className={`mobile-menu-close-icon ${!mobileMenu ? 'inactive' : ''}`} onClick={toggleMobileMenu} xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
          <path Fill-rule="evenodd" clip-rule="evenodd" d="M7.99982 6.79271L1.2823 0.0751953L0.575195 0.782302L7.29271 7.49982L0.575195 14.2173L1.2823 14.9244L7.99982 8.20692L14.7173 14.9244L15.4244 14.2173L8.70692 7.49982L15.4244 0.782302L14.7173 0.0751953L7.99982 6.79271Z" fill="black"/>
        </svg>  
       
      </nav>
      { mobileMenu && (<div className="mobile-nav-links-container">
          <Link onClick={toggleMobileMenu} className='nav-links' to="/stories">Stories</Link>
          <Link onClick={toggleMobileMenu} className='nav-links' to="/features">Features</Link>
          <Link onClick={toggleMobileMenu} className='nav-links' to="/pricing">Pricing</Link>
          <hr className='mobile-link-container-break'></hr>
          <button className='mobile-invite-btn'>Get An Invite</button>
      </div>)}
    </header>
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/stories" element={<Stories/>} />
      <Route path="/features" element={<Features/>} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
    <footer>
      <div className="footer-content-container">
        <div className="column-1">
          <img  src={`assets/footer-logo.svg`}  alt="footer-logo" />
          <div className="social-links">
            < img className='facebook' src={`assets/facebook.svg`} />
            < img className='youtube' src={`assets/youtube.svg`} />
            < img className='twitter' src={`assets/twitter.svg`} />
            < img className='pinterest' src={`assets/pinterest.svg`} />
            < img className='instagram' src={`assets/instagram.svg`} />
          </div>
        </div>
        <div className="footer-link-container">
          <Link  className='footer-nav-links' to="/">Home</Link>  
          <Link  className='footer-nav-links' to="/stories">Stories</Link>
          <Link  className='footer-nav-links' to="/features">Features</Link>
          <Link  className='footer-nav-links' to="/pricing">Pricing</Link>
          </div>
          <div className="column-3">
            <div className="invite-row">
              <p className='footer-invite-text'>Get An Invite</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="14" viewBox="0 0 42 14" fill="none">
                <path d="M0 7H41.864" stroke="white"/>
                <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="white"/>
              </svg>
            </div>
            <p className='copyright'>Copyright 2019. All Rights Reserved</p>
          </div>
      </div>
    </footer>
   
    </BrowserRouter>
  )
}
export default App
