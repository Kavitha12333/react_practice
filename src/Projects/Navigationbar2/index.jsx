import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import "./style.scss"
 const Index = () => {
  return (
    <div className='container'>
        <nav>
        
            <div className='logo'><a href="#">brand</a></div>
            <input type="checkbox" id="click"/> 
            <label for="click" className='menu-button'>
<MenuIcon></MenuIcon>
            </label>
            
                <div className='ul'>
                    <li><a  className="active"href="#">home</a></li>
                    <li><a href="#">services</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                </div>
            
        </nav>
    </div>
  )
}
export default Index
