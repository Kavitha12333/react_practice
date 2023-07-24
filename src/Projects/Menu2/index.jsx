import React from 'react'

import "./style.scss"
import HomeIcon from '@mui/icons-material/Home';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import CodeIcon from '@mui/icons-material/Code';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
 const Index = () => {
  return (

      
   <div className='container'>
      <div className='button'>
      {/*<input type="radio" name="slider" id="home" checked/>
      <input type="radio" name="slider" id="blog"/>
      <input type="radio" name="slider" id="code"/>
      <input type="radio" name="slider" id="blog"/>
      <input type="radio" name="slider" id="about"/>*/}
        <nav>
          
            <div className='slider'></div>
            <label for="home" className='home'>
<HomeIcon></HomeIcon>home
            </label>
            <label for="blog" className='blog'>
<CodeOffIcon></CodeOffIcon>blog
            </label>
            <label for="code" className='code'>
<ContentPasteIcon></ContentPasteIcon>code
            </label>
            <label for="blog" className='blog'>
 <CodeIcon></CodeIcon> blog
            </label>
            
        
            
            <label for="about" className='about'>
<PermContactCalendarIcon></PermContactCalendarIcon>about
            </label>
        </nav>
        </div>
  </div>
  )
}
export default Index
