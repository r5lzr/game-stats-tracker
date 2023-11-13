import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>

          {/* column 1 */}
          <div className='col'>
            <h1>CONTACT</h1>
            <ul className='list-unstyled'>
              <li>Email</li>
              <li>Github</li>
            </ul>
          </div>
          {/* column 2 */}
          <div className='col'>
            <h1>PRODUCTS</h1>
            <ul className='list-unstyled'>
              <li>League of Legends</li>
              <li>Rocket League</li>
              <li>Counter strike</li>
            </ul>
          </div>
          {/* column 3 */}
          <div className='col'>
            <h1>RESOURCES</h1>
            <ul className='list-unstyled'>
              <li>Request a game</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='hr-divider'/>
      <div className='container'>
        <p className='col-sm'>
          &copy;{new Date().getFullYear()} TRACKER WEBSITE
        </p>
      </div>
    </div>
  );
}
