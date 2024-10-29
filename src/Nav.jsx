import React from 'react'
import './index.css'

function nav() {
  return (
    <div>
      <header>
        <nav>
            <ul>
                <li className='Logo'>NAVBAR</li>
                <li><a className='nav-links' href="home">Home</a></li>
                <li><a className='nav-links' href="about">About</a></li>
                <li><a className='nav-links' href="contact">Contact</a></li>
                <li><a className='nav-links' href="login">Login</a></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}
export default nav