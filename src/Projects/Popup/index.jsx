
/*import React from 'react'
import "./style.css"
const Index = () => {
    let popup = document.getElementById("popup");
    function openPopup() {
        popup.classList.add("open-popup")
    }
    function closePopup() {
        popup.classList.remove("popup")
    }
    return (
        <div class='container'>
            <button type="submit" className='btn' onClick={()=>openPopup()}>submit</button>
            <div class="popup" id="popup">
                <img src="data:image/png;base64,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" />
                <h2>thank you!</h2>
                <p>your details has been success</p>
                <button type="button" onClick={closePopup}>ok</button>
            </div>
        </div>
    )
}
export default Index*/




 import React, { useState } from 'react'
 import "./style.css"
 const Index = () => {
     const [open, setOpen] = useState(false);
     const openPopup = () => {
         setOpen(true)
     }
     const closePopup = () => {
         setOpen(false)
     }
     return (
         <div class='container'>
             {
                 !open ?
                     <button className='btn' onClick={openPopup}>submit</button>
                     : ''
             }
             {
                 open ?
                     <div class={`popup ${open ? 'open-Popup' : 'popup'}`} id="popup">
                         <img src="data:image/png;base64,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" />
                         <h2>thank you!</h2>
                         <p>your details has been success</p>
                         <button onClick={closePopup}>ok</button>
                     </div>
                     : ''
             }
        </div>
     )
 }
export default Index