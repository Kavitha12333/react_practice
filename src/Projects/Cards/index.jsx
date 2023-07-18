import React from 'react'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplyIcon from '@mui/icons-material/Reply';
import "./style.scss"
const Index = () => {
    return (
        <div className='card'>
            <div className='card-profile'>

                <div className='image'>
                    <img src="data:image/jpeg;base64,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" />
                </div>

                <div className='text-data'>
                    <span className='name'>
                        codinglab
                    </span>
                    <span className='job'>youtuber & blogger</span>
                </div>
                <div className='media-buttons'>

                    <a href="#" className='link'>
                        <FacebookSharpIcon></FacebookSharpIcon>
                    </a>

                    <a href="#" className='like'>
                        <TwitterIcon></TwitterIcon>

                    </a>

                    <a href="#" className='instag'>
                        <InstagramIcon></InstagramIcon>
                    </a>

                    <a href="#" className='yout'>
                        <YouTubeIcon></YouTubeIcon>
                    </a>
                </div>
                <div className='buttons'>
                    <button className='button'>
                        subscribe
                    </button>
                    <button className='button'>message</button>
                </div>
                <div className='analytics'>
                    <div className='data'>
                    <FavoriteBorderIcon></FavoriteBorderIcon>
                    <span className='number'>60k</span>
                    </div>
                    <div className='data'>
                    <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
                    <span className='number'>20k</span>
                    </div>
                    <div className='data'>
                        <ReplyIcon></ReplyIcon>
                    
                    <span className='number'>12k</span>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Index
