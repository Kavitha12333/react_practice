import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios'
import { ReduceCapacitySharp } from '@mui/icons-material'
const Index = ({ data }) => {
  // axios.post("https://dev.backend.swaminathan.navabrinditsolutions.com/rest/V1/swaminathan/contactus");
  /*const [data, setData] = useState([])*/
  const [Data, setData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    message: '',

  })


  console.log(Response)
  

  
  const[formValues,setformvalues]=useState({
    name:"",
    email:"",
    phone_number:"",
    message:""
    

  });
  const[formErrors,setformErrors]=useState({
    name:"",
    email:"",
    phone_number:"",
    message:""

  });
  const formHandler = ()=>{
    alert("Everything ok")
  }
  console.log(formValues,formValues);
  console.log(formErrors,formErrors)
  const handleSubmit = (event) => {
    event.preventDefault()
  
 {/* .post("https://dev.backend.swaminathan.navabrinditsolutions.com/rest/V1/swaminathan/contactus",{
    
name:Data.name,
email:Data.email,
phone_number:Data.phone_number,
message:Data.message


    
  })
  .then(res=>{

  
    console.log(res.data)
  })*/}
    var isError = false;
    if (!formValues?.message) {
      setformErrors((prevState) => ({
        ...prevState,
        message: "Required field."
      }))
      document.getElementById("message")?.focus();
      var isError = true;
    }
  
    if (!formValues?.name) {
      setformErrors((prevState) => ({
        ...prevState,
        name: "Required field."
      }))
      document.getElementById("name")?.focus();
      var isError = true;
    }
    if(!formValues?.email){
      setformErrors((prevState)=>({
        ...prevState,
        email:"Required field."
      }))
      document.getElementById("name")?.focus();
      var isError=true;
    }
    if (!formValues?.phone_number) {
      setformErrors((prevState) => ({
        ...prevState,
        phone_number: "Required field."
      }))
      document.getElementById("name")?.focus();
      var isError = true;
    }
     // Final valiation
     if (!isError) {
      formHandler()
    }
 /* const [formValues, setformvalues] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: ""
  });
  const [formErrors, setformErrors] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: ""
  });
  // const handlechange = (e)=>{
  //   // debugger
  //   setformvalues((prevState)=>({
  //     ...prevState,
  //     [e.target.name]:e.target.value
  //   }))
  //   // let data = e.target.value
  // }
  const formHandler = ()=>{
    alert("Everything ok")
  }
  console.log(formValues, "formValues")
  console.log(formErrors, "formErrors")
  const handleSubmit = (event) => {
    event.preventDefault()
    var isError = false;
    if (!formValues?.message) {
      setformErrors((prevState) => ({
        ...prevState,
        message: "Required field."
      }))
      document.getElementById("message")?.focus();
      var isError = true;
    }
    

    if (!formValues?.name) {
      setformErrors((prevState) => ({
        ...prevState,
        name: "Required field."
      }))
      document.getElementById("name")?.focus();
      var isError = true;
    }
    if (!formValues?.phone_number) {
      setformErrors((prevState) => ({
        ...prevState,
        phone_number: "Required field."
      }))
      document.getElementById("name")?.focus();
      var isError = true;
    }*
    
    
    // Final valiation
    if (!isError) {
      formHandler()
    }
    // if (!formValues?.message) {
    //   setFormError((prevState) => ({
    //     ...prevState,
    //     message: "Required field."
    //   }))
    //   recaptcha.current.reset();
    //   document.getElementById("message")?.focus();
    //   var isError = true;
    // }
  }*/}

  return (
    <div className='container'>
      <div className='first-contact'>
        <div className='section'>
          <div className='row'>
            <div className='col'>
              <div className='block'>
                <div className='contact1'>
                  <h1>contact us</h1>
                  <p> we are here to helf you .please fill out the contact form with your message</p>
                  <div className='data'>
                    <div className='text'>
                      <div className='messge'>
                        <h3>Visit Us</h3>
                        {/*<p>Sri Swaminathan & Co

No. 61, Bakthapuri Street,

Kumbakonam - 612 001,

Thanjavur (DT)
  </p>*/}
                        <a href=""><div
                          dangerouslySetInnerHTML={{
                            __html: data?.[0]?.contact_us.address


                          }}
                        /></a>
                      </div>


                      <div className='icon'>
                        <h3>Follow Us</h3>
                        <div className='socialmedia'>
                          {/* {
                                            data?.[0]?.follow_us?.map((item, index) => {
                                                return (
                                                    <div className='faceboock'>
                                                        <a href="https://www.facebook.com" target="_blank" title="Facebook">
                                                            <img src={item?.header_image} />
                                                        </a>
                                                    </div>
                                                )
                                            })
                                        }*/}
                          <div className='faceboock'>
                            <a href="https://www.facebook.com" target="_blank" title="Facebook">
                              <img src="https://dev.swaminathan.navabrinditsolutions.com/static/media/Facebook.fbb0239921f1a3ed75c94e1b0d40dd86.svg" /></a>

                          </div>

                          <div className='twitter'>
                            <a href="https://twitter.com" target="_blank" title="Twitter">
                              <img src=" https://dev.swaminathan.navabrinditsolutions.com/static/media/Twitter.035d807f073753fd487403ab58d22b39.svg" /></a>
                          </div>

                          <div className='twitter'>

                            <a href="https://www.instagram.com" target="_blank" title="Instagram">
                              <img src="https://dev.swaminathan.navabrinditsolutions.com/static/media/Instagram.e19c2b230751fc7c63f221536f31077b.svg" /></a>

                          </div>
                        </div>


                      </div>

                    </div>
                    <div className='text'>
                      <h3>Talk To Us</h3>
                      <div className='contact'>
                        < img src="https://dev.swaminathan.navabrinditsolutions.com/static/media/phoneIcon.9da0cb698b35141b5c7f75e7efc4a670.svg" />

                        <a class="msg" href="tel: 0435-2432260"> 0435-2432260</a>


                      </div>
                      <div className='contact'>
                        <img src="https://dev.swaminathan.navabrinditsolutions.com/static/media/mobileIcon.dd66e3e2a59dcdcf4b7b6c882c7b85df.svg" />

                        <a href={data?.[0]?.mobile_number}>{data?.[0]?.mobile_number}</a>

                      </div>

                      <div className='contact'>
                        <img src="https://dev.swaminathan.navabrinditsolutions.com/static/media/mailIcon.74795ba7190faee9e3827239ef6ee19b.svg" />

                        <a href={data?.[0]?.email_address}>{data?.[0]?.email_address}</a>

                      </div>

                      {/* <a href="mailto:swamiexport@gmail.com" class="call">swamiexport@gmail.com</a>*/}

                    </div>
                  </div>
                </div>
                <div className='contact2'>


                  <h1>get in touch with us</h1>
                  <form onSubmit={handleSubmit}>
                    <div className='task'>
                      <div className='text'>
                        <div className={`form-group ${formErrors?.name?'error_field':''}`}>
                        <p>name<span> *</span></p>
                        <label>name</label>
                      <input
                      type="text"
                      onChange={(e)=>{
                        setformvalues((prevState)=>({
                        ...prevState,
                        name:e.target.value
                        }))
                        setformErrors((prevState) => ({
                          ...prevState,
                          name: ""
                        }))

                      }}
                      name="name"
                      />
                      </div>
                      {
                          formErrors?.name ?
                            <p style={{ color: "red" }}>{formErrors?.name}</p>
                            : ""
                           }
                      <div className={`form-group ${formErrors?.email?'error_field':''}`}>
                        <p>email<span> *</span></p>
                        <label>email</label>
                        <input 
                        type="text"
                        onChange={(e)=>{
                          setformvalues((prevState)=>({
                           ...prevState,
                           email:e.target.value 
                          }))
                          setformErrors((prevState) => ({
                            ...prevState,
                            email: ""
                          }))
                        }}
                        name="email"
                        />


                      </div>
                      
                      
                      {
                          formErrors?.email ?
                            <p style={{ color: "red" }}>{formErrors?.email}</p>
                            : ""
                           }
                      <div className={`form-group ${formErrors?.phone_number?'error_field':''}`}>
                        <p>phone_number<span> *</span></p>
                        <label>phone_number</label>
                        <input 
                        type="text"
                        onChange={(e)=>{
                          setformvalues((prevState)=>({
                            ...prevState,
                            phone_number:e.target.value
                          }))
                          setformErrors((prevState) => ({
                            ...prevState,
                            phone_number: ""
                          }))
                        
                        }}
                        name="phone-number"
                        />
                      </div>
                      {
                          formErrors?.phone_number ?
                            <p style={{ color: "red" }}>{formErrors?.phone_number}</p>
                            : ""
                           }
                      </div>
                      <div className='text'>
                      <div className={`form-group ${formErrors?.message?'error_field':''}`}>
                          <p>message<span> *</span> </p>
                          <textarea rows="10"
                            id="message"
                            onChange={(e) => {
                              setformvalues((prevState) => ({
                                ...prevState,
                                message: e.target.value
                              }))
                              setformErrors((prevState) => ({
                                ...prevState,
                                message: ""
                              }))
                            }}
                            name="message" />
                        </div>
                        {
                          formErrors?.message ?
                            <p style={{ color: "red" }}>{formErrors?.message}</p>
                            : ""
                        }
                      
            
                           
                        <button type="submit">send message</button>
   
                        </div>
                      
                    </div>
                    
                          </form>

                {/* <form onSubmit={handleSubmit}>
                    <div className='task'>
                      <div className='text'>
                        <div className={`form-group ${formErrors.name ? 'error' : ''}`} >
                          <p>name <span> *</span> </p>
                          <label>name</label>
                          <input
                            type="text"
                            onChange={(e) => {
                              setformvalues((prevState) => ({
                                ...prevState,
                                name: e.target.value
                              }))
                            }}
                            name="name"
                          />
                        </div>
                        <p style={{ color: "red" }}>{formErrors.name}</p>

                        <div className={`form-group ${formErrors.email ? 'error' : ''}`} >
                          <p>email<span> *</span></p>
                          <label>email</label>
                          <input
                            type="text"
                            onChange={(e) => {
                              setformvalues((prevState) => ({
                                ...prevState,
                                email: e.target.value
                              }))
                            }}
                            name="email" />
                        </div>
                        {
                          formErrors?.message ?
                            <p style={{ color: "red" }}>{formErrors?.message}</p>
                            : ""
                        }

                        <div className='form-group'>
                          <p>phone number <span> *</span></p>
                          <label>phonenumber</label>
                          <input
                            type="text"
                            onChange={(e) => {
                              setformvalues((prevState) => ({
                                ...prevState,
                                phone_number: e.target.value
                              }))
                              setformErrors((prevState) => ({
                                ...prevState,
                                phone_number: ""
                              }))  
                            }}
                            name="phone_number"
                          />
                        </div>
                        {
                          formErrors?.phone_number ?
                            <p style={{ color: "red" }}>{formErrors?.phone_number}</p>
                            : ""
                        }
                        

                      </div>
                      <div className='text'>
                        <div className={`form-group ${formErrors?.message?'error_field':''}`}>
                          <p>message<span> *</span> </p>
                          <textarea rows="10"
                            id="message"
                            onChange={(e) => {
                              setformvalues((prevState) => ({
                                ...prevState,
                                message: e.target.value
                              }))
                              setformErrors((prevState) => ({
                                ...prevState,
                                message: ""
                              }))
                            }}
                            name="message" />
                        </div>
                        {
                          formErrors?.message ?
                            <p style={{ color: "red" }}>{formErrors?.message}</p>
                            : ""
                        }
                        <button type="submit">send message</button>

                      </div>

                    </div>
                      </form>*/}



                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
      <div className='map'>
        <div className='section'>
          <div className='row'>
            <div className='col'>
              <div className='block'>


                <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.880562841015!2d77.78751067530939!3d12.979490237336629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0e7e32fd64b1%3A0xb90db42d1a8ebc05!2sSamethanahalli%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1683461467773!5m2!1sen!2sin" width="100%" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>



  )
}

export default Index;
