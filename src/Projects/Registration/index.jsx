import React from 'react'
import "./style.scss"
 const Index = () => {
  return (
    <div className='container'>
      <div className='header'>
      <div className='nav'>
        <a href="#" className='logo'>codinglab</a>
        <ul className='nav-items'>
          <li className='nav-item'>
            <a href="#" className='nav-links'>home</a>
            <a href="#" className='nav-links'>product</a>
            <a href="#" className='nav-links'>services</a>
            <a href="#" className='nav-links'>contact</a>
          </li>

        </ul>
        <button className='button'>login</button>
      </div>
      </div>
      </div>
  )
}
export default  Index
