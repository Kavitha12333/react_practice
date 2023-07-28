import React from 'react'
import "./style.scss"
 const Index = () => {
  return (
    <div className='body'>
        <div className='container'>
         <div className='header'>
            system settings</div> 
            <div className='group'>
                <div class="item">wi-fi</div>
                <div class="item">Bluetooth</div>
                <div class="item">portable hotspot</div>
                </div> 
                <div className='box-group'>
                    <input type="checkbox"/>
                    <input className='box2' type="checkbox"/>
                    <input className='box2' type="checkbox"/>
                        </div> 
        </div>
    </div>

  )
}
export default Index
