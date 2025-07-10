import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
      <div className='logo'>
        <img src="/image/brand_logo.png" alt="logo" />
      </div>

      <ul>
        <li >Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button>Login</button>
    </nav>
    </div>
  )
}

export default Navbar