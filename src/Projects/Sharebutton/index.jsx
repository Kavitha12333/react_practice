import React from 'react'
import "./style.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import YouTubeIcon from '@mui/icons-material/YouTube';
 const Index = () => {
  return (
    <div className='wrapper'>
        <div className='icon'>
            <div className='text'>
            <a href="#"className='i'><FacebookIcon></FacebookIcon></a>
            <a href="#"className='i'><TwitterIcon></TwitterIcon></a>
            <a href="#"className='i'><InstagramIcon></InstagramIcon></a>
            <a href="#"className='i'><YouTubeIcon></YouTubeIcon></a>
           </div> 
        </div>
    </div>
  )
}
export default Index
