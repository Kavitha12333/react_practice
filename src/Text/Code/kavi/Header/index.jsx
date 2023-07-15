import React from 'react'
import { Link } from "react-router-dom"
import "./style.css"
const Index = () => {
  const Menulist = [
    {
        menu: "Home",
        link: "home"
    },
    {
        menu: "Services",
        link: "services"

    },

    {
        menu: "About us",
        link: "about us"
    },
    {
        menu: "Project",
        link: "project"
    },
    

]
  return (

    <div className='container'>
       
    <div className='third-header'>
        <div className='section'>
            
                <div className='row'>
                    <div className='col'>
                    <div className='block'>
                        <div className='left'>
                            <div className='details'>
                            
<span ><img src="https://dev.swaminathan.clearancekommerce.com/static/media/swaminathan-icons-04.677b3f71fe0787708b79cf5718aa0f72.svg"/>Brooklyn</span>, 
NY 
<span class="postal-code">10036</span>, 
<span class="country-name">United States</span>
</div>
<div className='details'>
                                

    <img src="https://dev.swaminathan.clearancekommerce.com/static/media/swaminathan-icons-18.7eceba7723a312262b02a10cde32719a.svg"/>
    <a href="1-800-123-1234">1-800-123-1234</a>
</div>
<div className='details'>
    <img src="https://dev.swaminathan.clearancekommerce.com/static/media/swaminathan-icons-15.acd6734fe46a7e9a472fde719b8a7f07.svg"/>
    <a href="mailto:example@econature.com">example@goodday.com</a>
    
</div>
</div>
<div className='right'>
    <ul>
        <li><a href="#">About us</a></li>
        <li><a href="#">services</a></li>
        <li><a href="#">contacts</a></li>
        <li><a href="#">home</a></li>
    </ul>
</div>
                        </div>
                   </div> 
                </div>
            </div>

        </div>


    <div className='secondary-header'>
        <div className='section'>
            <div className='row'>
                <div className='col'>
                    <div className='block'>
                        <div className='image'>
                    <img src="https://eco-nature.cmsmasters.net/boxed/wp-content/uploads/sites/3/2014/07/logo-boxed.png" alt="Eco Nature Boxed"/>
                    </div>
                    <div className='search'>
                  <h3>

 Needs Your Help<i class="fa fa-search" aria-hidden="true"fa-3x></i></h3>
 <div className='searchbox'>
    <input type="text" class="searchtext" placeholder='type to search'/>
    <a href="#" class="searchbtn" ><i class="fa fa-search" aria-hidden="true"fa-3x></i></a>
    
 </div>
 </div>
 
             </div>
                </div>
            </div>
        </div>
    </div>
    <div className='primary-header'>
        <div className='section'>
            <div className='row'>
            <div className='col'>
                <div className='block'>
                    <div className='link'>
                   {/* <ul>
                        <li><a href="home">Home</a></li>
                        <li><a href="home">Services</a></li>
                        <li><a href="home">About us</a></li>
                        <li><a href="home">Project</a></li>
                        <li><a href="home">Blog</a></li>
                        <li><a href="home">contact</a></li>
                    </ul>*/}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className='Navbar'>
   <ul>
                  {/*  {
                    Menulist?.map((item, Index) => {
                        return (


                            <li> <Link to={item?.link}>
                                {item?.menu}</Link></li>


                        )
                    })
                } */}
        

<li>
    <Link to='home'>Home</Link>
</li>
                    <li>
                        <Link to='/services'>Services</Link>
                    </li>


                    <li>
                      <Link to='/project'>Project</Link>
                      </li>
                    
                      </ul>
                      </div>
    </div>
  )
}

export default Index