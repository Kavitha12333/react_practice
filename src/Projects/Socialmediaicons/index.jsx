import React from 'react'
import "./style.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
 const Index = () => {
  return (
    <div className='container'>
        <div className='main-box'>
            <input type="checkbox" id="check"/>
            <label for="check">share</label>
            <div className='icons'>
                <a href="#"><FacebookIcon></FacebookIcon></a>
                <a href="#"><TwitterIcon></TwitterIcon></a>
                <a href="#"><InstagramIcon></InstagramIcon></a>
                <a href="#"><YouTubeIcon></YouTubeIcon></a>
            </div>
        </div>
    </div>
  )
}
export default Index
