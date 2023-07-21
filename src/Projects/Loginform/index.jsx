import React from 'react'
import "./style.scss"
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LockIcon from '@mui/icons-material/Lock';
 const Index = () => {
  return (
    <div className='container'>
        <div className='loginform'>
    <div className='wrapper'>
        <div className='title'><span>login form</span>
        </div>
        <div className='form'>
            <div className='row'>
            <a href="#" className='link'>
            <ContactPageIcon></ContactPageIcon> 
                    </a>
           
                <input type="text"  placeholder='email or phone'/>
            </div>
            <div className='row'>
            <a href="#" className='link'>
            <LockIcon></LockIcon>
                    </a>
                
                <input type="text"  placeholder='password'/>
            </div>
            <div className='pass'><a href="#">forgot-password</a></div>
            <div className='row '>
                <input type="submit" value="login"/>
                 </div>
    
                 <div className='signup-link'>not a member?<a href="#">signup now</a></div>
        </div>
        </div>
        </div>
        
        </div>
        
  )
}
export default Index
