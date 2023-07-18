import React from 'react'
import "./style.css"
 const Index = () => {
  return (
    <div className='container'>
        <div className='wrapper'>
            <div className='title'>loginform</div>
            <form>
            <div className='field'>
                    <input type="password" required/>
                    <label>password</label>
                </div>
                <div className='field'>
                    <input type="password" required/>
                    <label>password</label>
                </div>
                <div className='pass-link'><a href="">forgot password?</a></div>
                <div className='field'>
                    <input type="submit" value="login"/>
                    
                </div>
                <div className='signup-link'>not a member?<a href="#">signup now</a></div>
    </form>        </div>
    </div>
  )
}
export default Index
