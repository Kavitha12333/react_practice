import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import "./style.scss"
 const Index = () => {
  return (
    <div className='container'>
        <nav>
        <div className='menu'>
            <input type="checkbox" id="check"/>
            <div className='logo'><a href="#">codinlab</a></div>
          
          <ul className='list'>
          <label className='button cancel' for="check"><CancelPresentationIcon></CancelPresentationIcon></label>
            
                <li><a href="#">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">contact</a></li>
                <li><a href="#">service</a></li>
                <li><a href="#">feedback</a></li>
            </ul>
            <lable className=" bars" for="check" ><MenuIcon></MenuIcon></lable>
          </div>
        </nav>
    </div>
  )
}
export default Index
