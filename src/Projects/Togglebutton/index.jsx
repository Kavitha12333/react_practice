import React from 'react'
import "./style.scss"
import LockOpenIcon from '@mui/icons-material/LockOpen';
 const Index = () => {
  return (
    <div className="container">
      <div className='toggle-btn'>
        <div className='icon'>
<LockOpenIcon></LockOpenIcon>
        </div>
      </div>
      <script>
        const toggleBtn= document.querySelector(".toggle-btn"),
        lockicon=document.querySelector(".icon");
        toggleBtn.addEventListener("click", () => {
          /*toggleBtn.classList.toggle("active")*/

        })
      </script>
    </div>
  )
}
export default Index
