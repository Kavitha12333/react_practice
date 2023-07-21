
import React from 'react'
import "./style.scss"
const Index = () => {
  return (
    <div className='container'>
        <div className='skills'>
            <div className='skill-box'>
                <span className='title'>html</span>
<div className='skill-bar'>
    <span className='skill-per'>
        <span class="Tooltip">90%</span>
        </span>
    </div>
</div>
<div className='skill-box'>
                <span className='title'>css</span>
<div className='skill-bar'>
    <span className='skill-per css'>
        <span class="Tooltip">70%</span>
        </span>
    </div>
</div>
<div className='skill-box'>
                <span className='title'>javascript</span>
<div className='skill-bar'>
    <span className='skill-per javascript'>
        <span class="Tooltip">50%</span>
        </span>
    </div>
</div>
<div className='skill-box'>
                <span className='title'>react</span>
<div className='skill-bar react'>
    <span className='skill-per react'>
        <span class="Tooltip">30%</span>
        </span>
    </div>
</div>


            </div>
        </div>

    
  )
}
export default Index
