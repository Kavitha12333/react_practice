import React from 'react'
import "./style.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
 const Index = () => {
  return (
    <div className='body'>
        <div className='main-box'>
    
            <div className='content'>
            <input type="checkbox" id="check"/> 
            <label for="check" className='box'>
                <div className='share'>share</div>
                <div className='cancle'>cancle</div>
            </label>
                <div className='image-box'>
                    <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1060&t=st=1690103393~exp=1690103993~hmac=bf4cb399b8d36bf6ed2bbb964cafbd5f1d95495ef85143aa7b1550c4e707842a"/>
            <div className='about'>
                <div className='details'>
                    <div className='name'>james bernal</div>
                    <div className='job'>developer / youtuber</div>
                    <div className='icons'>
                        <a href="#"><FacebookIcon></FacebookIcon></a>
                        <a href="#"><TwitterIcon></TwitterIcon></a>
                        <a href="#"><InstagramIcon></InstagramIcon></a>
                        <a href="#"><YouTubeIcon></YouTubeIcon></a>
                    </div>
                </div>
                </div>    
                </div>
            </div>

        </div>
        </div>
  )
}
export default Index 
