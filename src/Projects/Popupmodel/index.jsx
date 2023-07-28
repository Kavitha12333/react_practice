import React from 'react'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import "./style.scss"
 const Index = () => {
  return (
    <div className='body'>
        <input type="checkbox" id="check"/>
        <label for="check" className='show-button' >click me</label>
        <div className='background'>
            <div className='alert-box'>
                <div className='icon'>
                    <PriorityHighIcon></PriorityHighIcon>
                    </div>
                    <header>Confirm</header>
                    <p>are you sure perminetly delete this photo?</p>
                    <div className='btns'>
                        <label for="">yes,delete!</label>
                        <label for="">cancle</label>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
export default Index
