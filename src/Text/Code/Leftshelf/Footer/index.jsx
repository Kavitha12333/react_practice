import { useEffect, useState } from "react"
import axios from 'axios'
import "./style.css"

const Index = ({data}) => {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   axios.get("https://dev.backend.swaminathan.navabrinditsolutions.com/rest/V1/swaminathan/getheaderfooter").then(

  //     //Response=>  console.log(Response.data)
  //     //assingn a variable
  //     Response => setData(Response.data)
  //   )
  // }, [])
  // console.log(data?.[0]?.follow_us, "data")
  return (
    <div className='container'>
      <div className="conclusion">
        <h3>Popular Search</h3>
        <p>kama
          Holes Bathi Stand SHP-BS
          lamp
          vilakku
          SSP15390990
          SSP5467807
          SSP5369517
          lam
          Kunguma Simil Muthu Type M3045
          Round Bowl Silver Big 10"
          Holes Bathi Stand M851
          Meenakshi M5
          SSP11126452
          SSP5656234
          Brass Diya
          Danidar Bowl 3.5"
          lak
          Astalakshmi Vilakku 865-5
          bowl
          cow
          Bathi stand
          bath
          SSP1759
          meen
          mee
          SSP5135193
          SSP12872748
          laks
          gaja
          Round Bowl Silver Big 10
          SSP5711608
          SSP571160
          SSP5711
          SSP57
          SSP5
          SSP
          lamps
          wood
          bathi s
          bathi</p>
      </div>

      <div className='Footer'>
        <div className='section'>
          <div className='row'>
            <div className='col'>
              <div className='block'>
                <div className="data">
                  <div className="para1">
                    <h2>{data?.[0]?.footer_about_us.title}</h2>


                  </div>
                  <div className="para2">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.[0]?.footer_about_us.content

                      }}
                    />
                  </div>




                </div>

                <div className="second">
                  <h2>{data?.[0]?.contact_us.title}
                  </h2>
                  <div className="start">
                    <div className='first'>
                      <img src="https://dev.swaminathan.navabrinditsolutions.com/static/media/FooterLocation.729bdcdc7fe3107e1dacd676e726eacf.svg" />
                      <a href=""><div
                        dangerouslySetInnerHTML={{
                          __html: data?.[0]?.contact_us.address


                        }}
                      /></a>


                    </div>


                    <div className='text'>

                      <img src=" https://dev.swaminathan.navabrinditsolutions.com/static/media/Footermobile.6a78ca0b285d8474162a738d3723e650.svg" />


                      <a href={data?.[0]?.mobile_number}>{data?.[0]?.mobile_number}</a>

                    </div>
                    <div className='text'>

                      <img src="https://dev.swaminathan.navabrinditsolutions.com/static/media/FooterMail.d5aabcdb1bafd50ce69953fcbd906689.svg" />
                      <a href={data?.[0]?.email_address}>{data?.[0]?.email_address}</a>
                    </div>

                  </div>

                  <div className='icon'>

                    {

                      data?.[0]?.follow_us?.map((item, index) => {
                        return (
                          <div className="faceboock">
                            <a href="https://www.facebook.com" target="_blank" title="Facebook">
                              <img src={item?.footer_image} />
                            </a>
                          </div>
                        )
                      })
                    }


                    {/*<div className='sum'>
                      

                     <a href="https://www.facebook.com" target="_blank" title="Facebook">
                  
                       <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/homepage/default/FooterFb_2.svg" alt="..." title="Facebook"/></a>

</div>
                    
                    <div className="sun">
                      <a class="footer-social" href="https://twitter.com" target="_blank">
                        <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/homepage/default/footer_twitter_image_1.svg" alt="..." title="Twitter" /></a>



                    </div>


                    <div className='kavi'>
                      <a class="footer-social" href="https://www.instagram.com" target="_blank"><img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/homepage/default/footer_instagram_logo.svg" alt="..." title="Instagram" /></a>


                                      </div>*/}

                  </div>

                </div>


                <div className='third'>
                  <h2>{data?.[0]?.overview?.title}</h2>
                  <ul>

                    {/*<li> <a href="about-us">about-us</a></li>
                 <li> <a href="contact-us">contact-us</a></li>
                  <li><a href="Privacy Policy">privacy policy</a></li>
<li><a href="Terms & Conditions"
>Terms & condition</a></li>
<li><a href ="For Queries">For Queries</a></li>
                                    <li><a href="Global Sourcing">Global Sourcing</a></li>*/}



                    {
                      data?.[0]?.overview?.data?.map((item, ind) => {
                        return <li key={ind}>{item?.title}</li>
                      })}
                  </ul>

                </div>

                <div className='fourth'>
                  <h2>{data?.[0]?.payment_method.title}
                  </h2>
                  <img src={data?.[0]?.payment_method.image} />



                  {/*<img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/homepage/default/Razorpay_1.svg" />*/}
                </div>
                <div className='five'>

                  <h2>subscribe to newsletter</h2>

                  <div className="form">
                    <input type="text" placeholder='enter email adress' />
                    <button type="submit"> <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className='para'>
        <p>{data?.[0]?.copyright}
        </p>

      </div>
    </div>



  )
}
export default Index
