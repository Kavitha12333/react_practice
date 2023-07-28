import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import "./style.scss"
 const Index = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <input type="checkbox" id="btn"/>
        <label for="btn" className='menubutton'>
       <i> <MenuIcon></MenuIcon></i>
        </label>
        <nav id="sidebar">
          <div className='title'>side menu</div>
          <ul className='list-items'>
            <li><a href="#">home</a></li>
            <li><a href="#">services</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
            <li><a href="#">settings</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default Index
