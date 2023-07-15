import React from 'react'
import "./style.css"
import { CheckBox } from '@mui/icons-material'
 const Loginform = () => {
    
  return (
    <div className='popup'>
    <div className='center'>
        <input type="Checkbox" id="show"/>
    <label for="show" class="show-btn">view form</label>
    <div className='container'>
        <div className='section'>
            <div className='row'>
                <div className='col'>
<div className='block'>
                        <label for="show" class="close-btn fas fa-times"></label>
                        <h1>Login Form</h1>
                        <form>
                        <div className='text'>
                            <label>email or phone</label>
                            <input type="text" placeholder='email or phon' required/>
                            

                         </div>
                         <div className='text'>
                            <label>password</label>
                            <input type="text" placeholder='password' required/>
                         </div>
                         <div className='forgot-pass'><a href="#">forgot password?</a></div>
                         <div className='btn'>
                            <div className='inner'></div>
                            <button type="submit">login</button>
                            
                         </div>
                         <div className='signup-link'>not a member?<a href="#">signup-now</a></div>
                         </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className='center2'>

    <input type="Checkbox" id="click"/>
    <label for="click" class="click-me">submit</label>
    <div className='content'>
        <div className='header'>
            <h2>model popup</h2>
            <label for="click" class="fas fa-times"></label>
        </div>
        <label for="click" class="fas fa-check"></label>
        <p>thanks for contact me     </p>
        <div className='line'></div>
        <label for="click" class="close-btn">close</label>
        
    </div>
        </div>
        </div>
    
  )
}
export default Loginform
