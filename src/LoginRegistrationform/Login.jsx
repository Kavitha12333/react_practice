import { useState } from 'react'
import "./style.css"
import axios from 'axios'
import swal from 'sweetalert'

const Login = () => {
  
    const[formValues,setformvalues]=useState({
        fullname:"",
        username:"",
        email:"",
        phone_number:"",
        passwod:"",
        confirm_password:"",
    })
    const[formErrors,setformErrors]=useState({
        fullname:"",
        username:"",
        email:"",
        phone_number:"",
        passwod:"",
        confirm_password:"",

    })
    const formHandler=()=>{
        // alert("everything is ok")
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
         
  axios.post("https://dev.backend.swaminathan.navabrinditsolutions.com/rest/V1/swaminathan/contactus",{
    

  
    
      "data": {
          "customer_id": "",
          "name": "demo",
          "email": "tes12@gmail.com",
          "phone": "+911331456712",
          "phone_valid": "1331456712",
          "message": "Hi\n"
      }

  
      
    })
    
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
          if (!formValues?.phone_number) {
            setformErrors((prevState) => ({
              ...prevState,
              phone_number: "Required field."
            }))
            document.getElementById("phone_number")?.focus();
            var isError = true;
          }
          if(!formValues?.password){
            setformErrors((prevState)=>({
              ...prevState,
             password:"Required field."
            }))
            document.getElementById("password")?.focus();
            var isError=true;
          }
          if(!formValues?.confirm_password){
            setformErrors((prevState)=>({
              ...prevState,
             confirm_password:"Required field."
            }))
            document.getElementById("confirm_password")?.focus();
            var isError=true;
          }
        
            

           // Final valiation
           if (!isError) {
            formHandler()
          }
    }
  return (
    
    <div className='container'>
        <div className='section'>
            <div className='row'>
                <div className='col'>
                    <div className='block'>
                        <h1>Registration form</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='content'>
                            <div className='text'>
                            {/* <div className={`form-group ${formErrors?.fullname?'error_field':''}`}>
                              <label> fullname</label>
                            <p>fullname</p>
                            <input type="text"
                                onChange={(event)=>{
                                    setformvalues((prevState)=>({
                                      ...prevState,
                                      fullname:event.target.value  
                                    }))
                                    setformErrors((prevState)=>({
                                        ...prevState,
                                        fullname:""
                                    }))
                                }}
                                name='fullname'/>
                            </div>
                            {
                          formErrors?.fullname ?
                            <p style={{ color: "red" }}>{formErrors?.fullname}</p>
                            : ""
                           }
                          </div>*/}
                           <div className={`form-group ${formErrors?.username?'error_field':''}`}>
                           
                            
                           <label>fullname</label>
                           <p>fullname</p>
                           <input type="text"
                           onChange={(event)=>{
                               setformvalues((prevState)=>({
                                 ...prevState,
                                 fullname:event.target.value  
                               }))
                               setformErrors((prevState)=>({
                                   ...prevState,
                                   fullname:""
                               }))
                           }}
                           name='fullname'/>
                       </div>
                       {
                     formErrors?.fullname ?
                       <p style={{ color: "red" }}>{formErrors?.fullname}</p>
                       : ""
                      }
                       </div>
                        

              <div className='text'>
                           <div className={`form-group ${formErrors?.username?'error_field':''}`}>
                           
                            
                                <label>username</label>
                                <p>username</p>
                                <input type="text"
                                onChange={(event)=>{
                                    setformvalues((prevState)=>({
                                      ...prevState,
                                      username:event.target.value  
                                    }))
                                    setformErrors((prevState)=>({
                                        ...prevState,
                                        username:""
                                    }))
                                }}
                                name='username'/>
                            </div>
                            {
                          formErrors?.username ?
                            <p style={{ color: "red" }}>{formErrors?.username}</p>
                            : ""
                           }
                            </div>
                            <div className='text'>
                            <div className={`form-group ${formErrors?.email?'error_field':''}`}>
                                <label>email</label>
                                <p>email</p>
                                <input type="text" onChange={(e)=>{
                                    setformvalues((prevState)=>({
                                        ...prevState,
                                        email:e.target.value
                                    
                                    }))
                                    setformErrors((prevState)=>({
                                        ...prevState,
                                        email:""
                                    }))
                                }}
                                name='email'/>
                                </div>
                                
                                {
                          formErrors?.email ?
                            <p style={{ color: "red" }}>{formErrors?.email}</p>
                            : ""
                           }
                                </div>
                                <div className='text'>
                                <div className={`form-group ${formErrors?.phone_number?'error_field':''}`}>
                                    <label>phone_number</label>
                                    <p>phone_number</p>
                                    <input type="text" onChange={(e)=>{
                                        setformvalues((prevState)=>({
                                            ...prevState,
                                            phone_number:e.target.value
                                        }))
                                        setformErrors((prevState)=>({
                                            ...prevState,
                                            phone_number:""
                                        }))

                                    }}
                                    name='phone_number'/>
                                </div>
                                {
                          formErrors?.phone_number ?
                            <p style={{ color: "red" }}>{formErrors?.phone_number}</p>
                            : ""
                           }
                                </div>
                                <div className='text'>
                                <div className={`form-group ${formErrors?.password?'error_field':''}`}>
                                    <label>password</label>
                                    <p>password</p>
                                    <input type="text" onChange={(e)=>{
                                        setformvalues((prevState)=>({
                                            ...prevState,
                                            password:e.target.value
                                        }))
                                        setformErrors((prevState)=>({
                                            ...prevState,
                                            password:""
                                        }))

                                    }}
                                    name='password'/>
                                </div>
                                {
                          formErrors?.password?
                            <p style={{ color: "red" }}>{formErrors?.password}</p>
                            : ""
                           }
                                </div>
                                
                                    
                                <div className='text'>
                                     <div className={`form-group ${formErrors?.confirm_password?'error_field':''}`}>
                                    <label>confirm-password</label>
                                    <p>confirm-password</p>
                                    <input type="text" onChange={(e)=>{
                                        setformvalues((prevState)=>({
                                            ...prevState,
                                            confirm_password:e.target.value
                                        }))
                                        setformErrors((prevState)=>({
                                            ...prevState,
                                            confirm_password:""
                                        }))

                                    }}
                                    name='confirm-password'/>
                                </div>
                                {
                          formErrors?.confirm_password?
                            <p style={{ color: "red" }}>{formErrors?.confirm_password}</p>
                            : ""
                           }
                    
                                
                                
                    
                            </div>
                            </div>
                            <h3>gender</h3>
                            <div className='gender'>
                                <input type="radio" name="gender" id="male"/>
                                <label>male</label>
                                <input type="radio" name="gender" id="female"/>
                                <label>female</label>
                                <input type='radio' name="gender" id="other"/>
                                <label>other</label>
                            </div>
                            <div className='btn'>
                            <button type="submit">Registration</button>
                            </div>
                            
    

                        </form>
    
                </div>
               {/* {
                  true?<Popup />:''
                }*/}
        </div>
    </div>
    </div>
    </div>
    
  )
}
export default Login
