import React,{useState,useEffect} from 'react'

import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import axios from 'axios';







 const Index = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://dev.backend.swaminathan.navabrinditsolutions.com/rest/V1/swaminathan/homepage").then(
      //Response=>  console.log(Response.data)
      //assingn a variable
      Response => setData(Response.data)
    )
  }, [])
  
    return (
      <div className='container'>
        <div className='section'>
          <div className='row'>
            <div className='col'>
              <div className='block'>

              {
                                          data?.[0]?.banner
                                            ?.map((item, index) => {
                                                return (
                                                    <div className='faceboock'>
                                                        <a href="https://www.facebook.com" target="_blank" title="Facebook">
                                                            <img src={item?.content
} />
                                                        </a>
                                                    </div>
                                                )
                                            })
                                        }

      

      

      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={15}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    
      
    
      
    >
      <div className='banner'>

      <SwiperSlide>
        <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/sparsh/banner/image/g/r/group_3056.png" alt="" style={{width:"100%",height:"30vh"}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/sparsh/banner/image/g/r/group_3054.png" style={{width:"100%",height:"30vh"}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/sparsh/banner/image/g/r/group_3056.png" style={{width:"100%",height:"30vh"}}/>
      </SwiperSlide>
     
      <SwiperSlide>
        <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/sparsh/banner/image/g/r/group_3054.png" style={{width:"100%",height:"30vh"}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/sparsh/banner/image/g/r/group_3056.png" alt="" style={{width:"100%",height:"30vh"}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/sparsh/banner/image/g/r/group_3054.png" style={{width:"100%",height:"30vh"}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/sparsh/banner/image/g/r/group_3056.png" alt="" style={{width:"100%",height:"30vh"}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/sparsh/banner/image/g/r/group_3054.png" style={{width:"100%",height:"30vh"}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/sparsh/banner/image/g/r/group_3056.png" alt="" style={{width:"100%",height:"30vh"}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/sparsh/banner/image/g/r/group_3054.png" style={{width:"100%",height:"30vh"}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/sparsh/banner/image/g/r/group_3056.png" alt="" style={{width:"100%",height:"30vh"}}/>
      </SwiperSlide>
      
      </div>
    </Swiper>
    </div>
            </div>
          </div>
        </div>
        <div className='section2'>
          <div className='row'>
            <div className='col'>
              <div className='block'>
              <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
    
    
      slidesPerView={5}
    
      navigation
      >
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/5/f/e/9/5fe9f37ccff1741c6af20d955fd3091936a3e6b5_SSSN_3_img1.png"/>
        
        <div className='data'>
        <div className='p'>saisinghason .300mg</div>
        <p>$580.00</p>
        <button type="btn"> Add to cart</button>
        
        </div>
        </div>
     </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
      
       <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/4/1/3/2/4132131e5a88df26bf8eb2807ffb6df2249fe987_S13_SB_img1.png"/>
      </div>
      <div className='data'>
      <div className='p'>salladai brass 670 gm</div>
      <p>1,420.00</p>
      <button type="btn">Add to cart</button>
      </div>
      
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/c/7/9/2/c79265b4c455649ec353d83293f150c97ffe08d5_ST_PD_img1.png"/>
        
        </div>
        <div className='data'>
          <div className='p'>padi o.1000gm</div>
          <p>$1,280.00</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/c/1/0/1/c101d8c6af88b21c48479e054d13718d1e1c05fe_MG_TT_Img1.png"/>
        
        
        </div>
        <div className='data'>
          <div className='p'>tortoise 60 Gm-g</div>
          <p>$1,300.00</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/b/9/f/f/b9ff5b077afa76d5474eb2776dac7b8408834987_STM_img1.png"/>
        
        </div>
        <div className='data'>
          <div className='p'>3.5 special lakshmi</div>
          <p>$160.00</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/c/1/7/7/c1771c9bfb7ed508ec2cddb56b46581468b35b9c_SD_DG_img1.png"/>
        </div>
        <div className='data'>
          <div className='p'>dimple glass cu</div>
          <p>$170.00</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/8/3/9/4/8394ee4fb38d2bbf76b3c952cd1e2cae80bbb7a8_SOD_2_img1_gp1.png"/>
        </div>
        <div className='data'>
          <div className='p'>oru muga deepam</div>
          <p>$460.00-515.00</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/7/e/3/1/7e316348cfd67328467dce6689a9fc81a3b1371b_M_AI_4_img1_gp1.png"/>
        </div>
        <div className='data'>
          <div className='p'>oru muga deepam</div>
          <p>$360.00-415.00</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/a/2/7/0/a2707d343669fd29f06b22424c0ced0aadb2cebb_MR_800G_img1.png"/>
        </div>
        <div className='data'>
      <div className='p'>kitchen item 670 gm</div>
      <p>1,220.00</p>
      <button type="btn">Add to cart</button>
      </div>
      
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/b/8/d/5/b8d506aae9977adbdfc2d7ae6fc80a7a7bf8c67f_SEL_18_img1.png"/>
        </div>
        <div className='data'>
          <div className='p'>elephant ball .500Gm-g</div>
          <p>$1,400.00</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/3/f/3/8/3f38f50e0cd1a6a5643560a903e8cd444b9fba3d_SCG_SL_img1.png"/>
        </div>
        <div className='data'>
          <div className='p'>copper glass with ss liner</div>
          <p>$360.00</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/7/b/2/f/7b2f8c77d5260c3e25026bd65686e8201f5e4371_SL_ST_img1.png"/>
        </div>
        <div className='data'>
          <div className='p'>lion sitting 250Gm-g</div>
          <p>$1,600.00</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/5/b/e/2/5be2abf65c4282b05f0a7d8c399404547f712acc_MB_PR_img1.png"/>
        </div>
        <div className='data'>
          <div className='p'>thiruatchi lakshmi 3.75</div>
          <p>$310.00</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/d/c/f/0/dcf09a43736022091cffb2a2f6c7d56552afaf37_SEL_3_img3.png"/>
        </div>
        <div className='data'>
          <div className='p'>elephant 0.050Gm(g)</div>
          <p>$1,950.00</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/a/b/e/a/abeac2014f77d1a0674239631fd28cdd76cdaa27_SW_MA1_img1.png"/>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/f/4/d/5/f4d54182d64bcc6d6b9daff68a5f26f7aa98c45f_SEH_B_img1.png"/>
        </div>
        <div className='data'>
          <div className='p'>elephant ball .500Gm-g</div>
          <p>$1,400.00</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/a/a/1/4/aa14b515f7e7df67ca8be38d76f2a550fa79c1c0_SLC_311_img1.png"/>
        </div>
        <div className='data'>
          <div className='p'>diamond design glass</div>
          <p>$195</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/0/5/2/8/05289774e85c3c0d37ccb3080326c2dc08b023c4_MLG_RS_img1.png"/>
        </div>
        <div className='data'>
          <div className='p'>annapurna malai 300gm</div>
          <p>$1,570.00</p>
          <button type="btn">add to cart</button>
        </div>
        
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/b/a/7/3/ba73521105697236d5e0e079e7624ab36d56528c_S758647113552_img1.png"/>
        </div>
        <div className='data'>
          <div className='p'>3.5 special lakshmi</div>
          <p>$160.00</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/b/4/2/f/b42f8e39b9328861eaee731e809ce347cfd27820_SBT_4_img1.png"/>
        </div>
        <div className='data'>
          <div className='p'>danavatri 5</div>
          <p>$2,100.00</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/0/9/2/2/092294c03957f413d061cb962ec163cd5c9eae9e_SCD_2_img.png"/>
        </div>
        <div className='data'>
      <div className='p'>lyam adukku-3pcs</div>
      <p>1,400.00</p>
      <button type="btn">Add to cart</button>
      </div>
      
       </SwiperSlide>
       <SwiperSlide>
       
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/f/a/f/6/faf62db3b9f624dc3cc778e6954b0ea231b78406_SND_SR_img1.png"/>
        </div>
        <div className='data'>
          <div className='p'>nandhi square .900Gm</div>
          <p>$1,180.00</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/f/a/f/6/faf62db3b9f624dc3cc778e6954b0ea231b78406_SND_SR_img1.png"/>
        </div>
        <div className='data'>
          <div className='p'>nandhi square .900Gm</div>
          <p>$1,180.00</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/catalog/product/placeholder/default/group_2525.png"/>
        </div>
        <div className='data'>
          <div className='p'>coffee filter no.1</div>
          <p>$420.00</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/4/2/b/0/42b0d4d46ef37819dce205d5e8ca540ec41f2fbe_SVG_1_img1_gp1.png"/>
        </div>
        <div className='data'>
          <div className='p'>vinaygar-svg</div>
          <p>$280.00-$300</p>
          <button type="btn">add to cart</button>
        </div>

       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/2/d/0/2/2d0264405f5414111da10e6415507d1f500a6eeb_S14_SB_img1.png"/>
        </div>
        <div className='data'>
      <div className='p'>salladai brass 670 gm</div>
      <p>1,420.00</p>
      <button type="btn">Add to cart</button>
      </div>
       </SwiperSlide>
       <SwiperSlide>
        <div className='img'>
          <img src="https://swaminathan-akeneo.s3.ap-south-1.amazonaws.com/catalog/c/6/1/e/c61e18a5a804423cb580f638bc489d108481c62b_SLC_541_img1.png"/>
        </div>
        <div className='data'>
          <div className='p'>magical set</div>
          <p>$1,280.00</p>
          <button type="btn">add to cart</button>
        </div>
       </SwiperSlide>
</Swiper>
              </div>
            </div>
          </div>
        </div>


</div>

  );
}
    
  
export default Index
