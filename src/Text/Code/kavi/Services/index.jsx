import React from 'react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import OpacityIcon from '@mui/icons-material/Opacity';
import "./style.scss"
 const Index = () => {
  return (
   < div className='container'>
    <div className='services'>
      <div className='section'>
        <div className='row'>
          <div className='col'>
            
              <div className='heading'>
                <h2>Services</h2>
              </div>
              <p>You are here: Home / Services</p>
              <div className='block'>
                <div className='slip'>
                  
                  <img src="https://eco-nature.cmsmasters.net/boxed/wp-content/uploads/sites/3/2014/07/589180-1920x1080-820x490.jpg"/>
                  
                  </div>
                  <div className='slip'>
                    <h3>our mission</h3>
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et et dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin justo non odio molestie, sed venenatis. Sed purus purus, tincidunt eget malesuada et, molestie ut eros. Fusce blandit, sapien. Sed purus purus, tincidunt eget malesuada et, molestie ut eros. Fusce blandit, sapien.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin justo non odio molestie, sed venenatis. Sed purus purus, tincidunt eget malesuada et, molestie ut eros. Fusce blandit, sapien. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero.</p>
                    <p>Ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin justo non odio molestie, sed venenatis. Sed purus purus, tincidunt eget malesuada et, molestie ut eros. Fusce blandit, sapien.</p>
                 <div className='btn'>
                   <button>donation</button> 
                   </div> 
                  </div> 
                    
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='statistics'>
      <div className='section'>
        <div className='row'>
          <div className='col'>
            <h2>statistics</h2>
            <div className='block'>
              <div className='circle'>
                <LightModeOutlinedIcon></LightModeOutlinedIcon>
                <p>Ecology</p>
                <h2>82%</h2>
              </div>
              <div className='circle'>
                <AutorenewIcon></AutorenewIcon>
                <p>Recycling</p>
                <h2>86%</h2>
              </div>
              <div className='circle'>
              <i class="fa fa-leaf" aria-hidden="true"></i>
                <p>organic</p>
                <h2>67%</h2>
              </div>
              <div className='circle'>
                <OpacityIcon></OpacityIcon>
                <p>biology</p>
                <h2>93%</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='programs'>
      <div className='section'>
        <div className='row'>
          <div className='col'>
            <h2>Programs</h2>
            <div className='block'>
              <div className='fun'>
                <ul>
                  <li>
                    <a href="#">saveelephants</a>
                  </li>
                  <li> <a href="#">echosupport</a></li>
                  <li><a href="#">wastedisposal</a></li>
                  <li><a href="#">redbbock</a></li>
                </ul>
                </div>
                <div className='fun'>
                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et et dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin justo non odio molestie, sed venenatis. Sed purus purus, tincidunt eget malesuada et, molestie ut eros. Fusce blandit, sapien. Sed purus purus, tincidunt eget malesuada et, molestie ut eros. Fusce blandit, sapien.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin justo non odio molestie, sed venenatis. Sed purus purus, tincidunt eget malesuada et, molestie ut eros. Fusce blandit, sapien. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero. Sed purus purus, tincidunt eget malesuada et, molestie ut eros. Fusce blandit, sapien. Sed purus purus, tincidunt eget malesuada et, molestie ut eros. Fusce blandit, sapien.</p>  
            </div>
            

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Index
