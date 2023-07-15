import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "./style.css"
 const Index = () => {

    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://dev.backend.swaminathan.navabrinditsolutions.com/rest/V1/swaminathan/aboutus").then(

          //Response=>  console.log(Response.data)
          //assingn a variable
          Response=>setData(Response?.data)
        )

        
            
    },[])
    console.log(data?.[0]?.logo, "logo")

  return (
    <div className='container'>
      <div className='about'>
        <div className='section'>
          <div className='row'>
          <div className='col'>
            
              <div className='block'>
                <h1>{data?.[0]?.data?.page_title}</h1> 
           <div className='text'>
                  <p>{data?.[0]?.data?.short_description}</p>
             {/*<p>Every block of stone has a statue inside it and it is the task of the sculptor to discover it</p>*/}
              </div>
              <div className='image'>
        <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/sparsh/banner/image/r/e/rectangle_2308.png"/>
        </div>
              </div>
            </div>
          </div>
        
          <div className='heading'>
            <h3>{data?.[0]?.data?.title}</h3>
          </div>
          <div className='text'>
            <p>{data?.[0]?.data?.description}

  </p>
           {/* <p>Founded by K. Masilamani, we pioneer in manufacturing Panchalogha and Ashtadhatu God. We also manufacture goddess murti’s, moolavar stone vigrahas and all kind of temple pooja articles and customized temple works. [Since-1918]</p>
*/}
   </div>
          <div className='imag'>
        {/*}  <img src={data?.[0]?.data.about_us_image}
/>*/}
 



            <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/default/Group_2945.png"/>
          </div>
        </div>
        
      </div>
      <div className='about-us'>
        <div className='section'>
          <div className='row'>
            <div className='col'>
            <h3>Products for Manufacturing</h3>
              <div className='block'>
              {
                                            data?.[0]?.data?.product_manufacturing
                                            ?.map((item, index) => {
                                                return (
                                                    <div className='block'>
                                                        <a >
                                                            <img src={item?.image
} />
                                                            <p>{item?.title
}</p>
                                                        </a>
                                                    </div>
                                                )
                                            })
                                        }
        
            
               {/*<div className='content'>
                
                                      <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/r/e/rectangle_2337_1.png"/>


<p></p>

</div>
<div className='content'>
  <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/r/e/rectangle_2338.png"/>
  <p>Panchalogha (5 Metals) and Ashtadhatu (8 Metals) God and Goddess statues.</p>
</div>
<div className='content'>
  <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/g/r/group_2950.png"/>
  <p>All special orders in sheet metal will be undertaken in the Temples and manufactured by us.</p>
</div>
<div className='content'>
  <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/r/e/rectangle_2340.png"/>
  <p>Copper, Brass, Pure Silver, Pure Gold Kavacham for God/Goddess</p>
</div>
<div className='content'>
  <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/r/e/rectangle_2352.png"/>
  <p>Different kinds of traditional Brass Ornamental Lamps.</p>
</div>
<div className='content'>
  <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/g/r/group_3532.png"/>
  <p>Bronze Antique imitation statues of God/Goddess.</p>
</div>
<div className='content'>
  <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/r/e/rectangle_2346.png"/>
  <p>Pooja Mandapam for household purpose</p>
</div>
<div className='content'>
  <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/g/r/group_3533.png"/>
  <p>All Brass and Copper vessels for Temple.</p>
</div>
<div className='content'>
  <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/g/r/group_3537.png"/>
  <p>Bronze Bell.</p>
</div>
<div className='content'>
  <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/g/r/group_3538.png"/>
  <p>Brass and stainless Hundial.</p>
</div>
<div className='content'>
  <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/g/r/group_3539.png"/>
  <p>Kopura Kalash.</p>

              </div>
              <div className='content'>
                <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/g/r/group_3540.png"/>
                <p>Brass/Copper Thiruvachi.</p>
              </div>
              <div className='content'>
                <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/g/r/group_3541.png"/>
                <p>Wooden Vahanam.</p>
              </div>
              <div className='content'>
                <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/g/r/group_3542.png"/>
                <p>Temple chariot</p>
              </div>
              <div className='content'>
                <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/g/r/group_3543.png"/>
                <p>Bronze Antique imitation fancy statues.</p>

              </div>
              <div className='content'>
                <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/g/r/group_3544.png"/>
                <p>Bronze Antique imitations doom lamps and wall decors.</p>
                                      </div>*/}

              </div>
                                      
        
                        <h2>Wholesale Dealers & Stockist in</h2>
                <div className='block2'>
             {/* {
                                            data?.[0]?.data?.wholesale_dealers
                                            .map((item, index) => {
                                                return (
                                                    <div className='block2'>
                                                        <a >
                                                            <img src={item?.image
} />
                                                            <p>{item?.title}</p>
                                                        </a>
                                                    </div>
                                                )
                                            })
                                        }*/}
                                        
              
                                        <div className='info'>
                    <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/r/e/rectangle_2337_1.png"/>
                    <p>All kinds of Brass, Copper, Pure Silver, Silver Plated, Pure Gold and Gold Plated Temple pooja materials.</p>
                  </div>
                  <div className='info'>
                    <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/r/e/rectangle_2361.png"/>
                    <p>Wide range of Glass Materials for Hotel.</p>
                  </div>
                  <div className='info'>
                    <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/r/e/rectangle_2362.png"/>
                    <p>First quality Brass and Copper wires, stripes, Rods and Tubes.</p>
                  </div>
                  <div className='info'>
                    <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/r/e/rectangle_2363.png"/>
                    <p>Copper Sheets.</p>
                  </div>
                  <div className='info'>
                    <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/r/e/rectangle_2364.png"/>
                    <p>First quality Brass and Copper wires, stripes, Rods and Tubes.</p>
                  </div>
                  <div className='info'>
                    <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/aboutus/r/e/rectangle_2365.png"/>
                    <p>First quality Brass.</p>
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
