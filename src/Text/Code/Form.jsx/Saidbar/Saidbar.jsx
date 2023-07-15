import React from 'react'
import{Rssfeed}from "@material-ui/icons" 
 const Saidbar = () => {
  return (
    <div className='saidbar'>
        <div className="sidewrapper">
            <ul className='saidbarlist'>
                <li className='sidebarlistiten'>
                <Rssfeed className="sidebaricon"/>
<span className='sidebarlistitemText'>Feed</span>
</li>
            </ul>
        </div>
    </div>
  )
}
export default Saidbar
