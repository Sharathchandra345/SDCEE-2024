import React from 'react'
import "./Hero.css"

export default function Hero() {
  return (
    <>
    <div className='hero'>
        <div className="hero-left">
          <div className="hero-text">
            <h1 className='hero-head'> SDCEE '24 </h1>
            <h5> International Conference on <br /> "Sustainable Development in Chemical and <br /> Environmental Engineering"</h5>

            <h3 className='mt-5'> Feburary 22-24, 2024 </h3>
            <button className='hero-reg mt-3'>Register</button>
          </div>
          
      </div>
        <div className="hero-right">

        </div>
      </div>

      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#ffffff" fill-opacity="1" d="M0,224L34.3,208C68.6,192,137,160,206,170.7C274.3,181,343,235,411,256C480,277,549,267,617,234.7C685.7,203,754,149,823,122.7C891.4,96,960,96,1029,117.3C1097.1,139,1166,181,1234,208C1302.9,235,1371,245,1406,250.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
      </div>
    </>
  )
}
