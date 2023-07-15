import React from 'react'
import {useState} from"react";
import swal from 'sweetalert'
import GitHubIcon from '@mui/icons-material/GitHub';
import RefreshIcon from '@mui/icons-material/Refresh';

import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import "./style.scss"
const Sass = () => {
    const[formValues,setformvalues]=useState({
        fullname:"",
        username:"",
        email:"",
    
    })
    const[formErrors,setformErrors]=useState({
        fullname:"",
        username:"",
        email:"",
    

    })
    const formHandler=()=>{
        // alert("everything is ok")
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        .then(res=>{
  
            if(res.data.status ===200){
              swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                button: "Aww yiss!",
              });
            }
            //console.log(res.data)
            if(res.data.status ===200){
              swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                button: "Aww yiss!",
              });
            }
          })
              var isError = false;
              if(!formValues?.fullname){
                  setformErrors((prevState)=>({
                    ...prevState,
                    fullname:"Required field."
                  }))
                  document.getElementById("fullname")?.focus();
                  var isError=true;
                }
                if(!formValues?.username){
                  setformErrors((prevState)=>({
                    ...prevState,
                    username:"Required field."
                  }))
                  document.getElementById("username")?.focus();
                  var isError=true;
                }
              if(!formValues?.email){
                  setformErrors((prevState)=>({
                    ...prevState,
                    email:"Required field."
                  }))
                  document.getElementById("email")?.focus();
                  var isError=true;
                }
                // Final valiation
                 if (!isError) {
                  formHandler()
                }
          }
    return (
        <div className='container'>
            <div className='home'>
                <div className='section'>
                    <div className='row'>
                        <div className='col'>
                            <div className='block'>
                                <h1>this is my first heading</h1>
                                <div className='network'>
                                    <div className='data'>
                                        <h2>cotegory1</h2>
                                        <GitHubIcon>
                                            hello
                                        </GitHubIcon>

                                        <span>this is my programing </span>

                                    </div>
                                    <div className='data'>
                                        <h2>category2</h2>
                                        <RefreshIcon>

                                        </RefreshIcon>
                                        <span> text will be located </span>
 </div>

                                    <div className='data'>
                                        <h2>category3</h2>
                                        <FacebookTwoToneIcon> 

                                        </FacebookTwoToneIcon>
                                        <span> text will be located </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='functional'>
                <div className='section'>
                    <div className='row'>
                        <div className='col'>
                            <div className='block'>
                                <div className='text'>

                <div className={`form-group ${formErrors?.fullname ? 'error_field' : ''}`}>
                    <label>fullname</label>
                    <p>fullname</p>
                    <input type="text" onChange={(e) => {
                        setformvalues((prevState) => ({
                            ...prevState,
                            fullname: e.target.value
                        }))
                        setformErrors((prevState) => ({
                            ...prevState,
                            fullname: ""
                        }))

                    }}
                        name='fullname' />
                </div>
                {
                    formErrors?.fullname?
                        <p style={{ color: "red" }}>{formErrors?.fullname}</p>
                        : ""
                }

            </div>
            <div className='text'>

<div className={`form-group ${formErrors?.username ? 'error_field' : ''}`}>
    <label>username</label>
    <p>username</p>
    <input type="text" onChange={(e) => {
        setformvalues((prevState) => ({
            ...prevState,
            username: e.target.value
        }))
        setformErrors((prevState) => ({
            ...prevState,
            username: ""
        }))

    }}
        name='username' />
</div>
{
    formErrors?.username?
        <p style={{ color: "red" }}>{formErrors?.username}</p>
        : ""
}

</div>
<div className='btn'>
<button>submit</button>
</div>
</div>
                        </div>
                    </div>
                </div>
            </div>
    <div className='footer'>
                <div className='section'>
                    <div className='row'>
                        <div className='col'>
                            <div className='block'>
                                <div className='data'>
                                    <h2>Services</h2>
                                    <ul>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Ocean Turtle</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">White Tiger</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Social Ecology</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Loneliness</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href='#'>Beauty of Life</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Present for You</a></li>
                                    </ul>
                                </div>
                                <div className='data'>
                                    <h2>Volunteer</h2>
                                    <ul>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Karen Dawson</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Jack Simmons</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Michael Linden</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Simon Green</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Natalie Channing</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Caroline Gerwig</a></li>
                                    </ul>
                                </div>
                                <div className='data'>
                                    <h2>About Us</h2>
                                    <ul>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Our Team</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Mission</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Philisophy</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="Actions">Actions</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Support</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Biology</a></li>
                                    </ul>
                                </div>
                                <div className='data'>
                                    <h2>Blog</h2>
                                    <ul>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i>
                                            <a href="#">Bear Population</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">The Ozone Layer</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Spring Melody</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Save Tropic Forests</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Ecology Team</a></li>
                                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><a href="#">Save Ocean</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
export default Sass