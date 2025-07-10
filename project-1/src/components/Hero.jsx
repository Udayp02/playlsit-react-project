import React from 'react'

const Hero = () => {
  return (
   <main className='hero'>
    <div className='hero-content'>
    <h1>YOUR FEET DESERVE THE BEST</h1>
    <p> YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

    <div className='hero-btn'>
        <button>Shop Now</button>
        <button>Category</button>
    </div>

    <div className='shopping'>
     <p>Also Avilable On</p>
     <div className='Brand-icons'>
        <img src="/image/amazon.png" alt="amazon-logo" />
        <img src="/image/flipkart.png" alt="amazon-logo" />
     </div>
    </div>
    </div>

    <div>
        <img src="/image/shoe_image.png" alt="hero-image" className='hero-img' />
    </div>

   </main>  )
}

export default Hero