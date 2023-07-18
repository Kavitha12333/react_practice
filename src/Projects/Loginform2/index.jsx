import React from 'react'
import "./style.scss"
import TwitterIcon from '@mui/icons-material/Twitter';
import { Twitter } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
const Index = () => {
    return (
        <div div className='animatedform'>
            <div className='wraplogin'>
                <form>
                    <div className='title'>
                        login
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='enter email-address' required />
                        <div className='underline'>

                        </div>
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='enter password' required />
                        <div className='underline'>


                        </div>
                    </div>
                    <div className='input-box button'>
                        <input type="submit" value="contineu"/>
                    </div>
                </form>
                <div className='option'>or connect with social media</div>
                <div className='twitter'>
                <a href="#" className='like'>
                        <TwitterIcon></TwitterIcon>login with twitter

                    </a>
                    </div>
                    <div className='faceboock'>
                    <a href="#" className='like'>
                        <FacebookIcon></FacebookIcon>
login with faceboock
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Index
