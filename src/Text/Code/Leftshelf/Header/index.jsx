import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

import "./style.css"

const Index = ({ data }) => {
    const [open, setOpen] = useState(false);
    //    const [data, setData] = useState([])
    //     useEffect(() => {
    //         axios.get("https://dev.backend.swaminathan.navabrinditsolutions.com/rest/V1/swaminathan/getheaderfooter").then(


    //             //Response=>  console.log(Response.data)
    //             //assingn a variable
    //             Response => setData(Response.data)
    //         )
    //     }, [])
    // console.log(data?.[0]?.logo, "logo")
    console.log(data, "data   vgvhgfhgf")


    const Menulist = [
        {
            menu: "Home",
            link: "home"
        },
        {
            menu: "categories",
            link: "categories"

        },

        {
            menu: "About",
            link: "about"
        },
        {
            menu: "Contact",
            link: "contact"
        },
        {
            menu:"Registration",
            link:"registration"
        },
        

    ]

    return (


        <div className='container'>

            <div className='header'>
                <div className='secondary-header'>
                    <div className='section'>
                        <div className='row'>
                            <div className='column'>
                                <div className='block'>
                                    <div className="left-flex">
                                        <div className='contact'>


                                            <img src="https://dev.swaminathan.navabrinditsolutions.com/static/media/mobile-icon.66676b9779e6a3f60641c8412c12b4f2.svg" />
                                            <a href={data?.[0]?.mobile_number}>{data?.[0]?.mobile_number}</a>

                                        </div>
                                        <div className='icon'>

                                            <i class="fa fa-bars" aria-hidden="true"></i>
                                        </div>

                                        <div className='contact'>

                                            <img src=" https://dev.swaminathan.navabrinditsolutions.com/static/media/header-mail.2ad6bdec42a73cda93f1b248f1a98987.svg" />



                                            <a href={data?.[0]?.email_address}>{data?.[0]?.email_address}</a>


                                            {/*<a href="mailto:swamiexport@gmail.com" class="call">swamiexport@gmail.com</a>*/}
                                        </div>
                                    </div>

                                    <div className='right-flex'>

                                        {
                                            data?.[0]?.follow_us?.map((item, index) => {
                                                return (
                                                    <div className='faceboock'>
                                                        <a href="https://www.facebook.com" target="_blank" title="Facebook">
                                                            <img src={item?.header_image} />
                                                        </a>
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className='faceboock'>

                                            {/* <a href="https://www.facebook.com" target="_blank" title="Facebook">*/}

                                            { /*<a href="https://www.facebook.com" target="_blank" title="Facebook">
                                                <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/homepage/default/facebook.svg" /></a>



                                        </div>

                                        <div className='twitter'>

                                            <a href="https://twitter.com" target="_blank" title="Twitter">
                                                <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/homepage/default/twitter.svg" /></a>
                                        </div>

                                        <div className='twitter'>

                                            <a href="https://www.instagram.com" target="_blank" title="Instagram">
                                                <img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/homepage/default/instagram.svg" /></a>
*/}
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
                            <div className='column'>
                                <div className='block'>

                                    <div className='image'>
                                        <img src={data?.[0]?.mobile_logo} />

                                        {/*<img src="https://dev.backend.swaminathan.navabrinditsolutions.com/media/logo/stores/1/Group_1525.png" />
                               */} </div>


                                    <div className='kavi'>

                                        <form>
                                            <input type="text" placeholder='search' />
                                            <button type="submit"> <i class="fa fa-search" aria-hidden="true"></i></button>
                                        </form>

                                    </div>
                                    <div className='chat'>
                                        <div className='icon'>

                                            <img src="https://dev.swaminathan.navabrinditsolutions.com/static/media/mywishlist.8bad9ca08bb726be43ad96bb56dc22d7.svg" />
                                            {/*<span>my wishlist</span>

                                            { /*<span className="fa fa-heart">1</span>
                                                <span className="fa fa-shopping-cart">1</span>*/}
                                        </div>
                                        <span class="MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorPrimary MuiBadge-badge css-u73eqg">0</span>



                                        <div className='chat'>

                                            <img src="https://dev.swaminathan.navabrinditsolutions.com/static/media/mycart.73822892f819f6c16b2be89a69024344.svg" />
                                            <span class="MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorPrimary MuiBadge-badge css-u73eqg">0</span>
                                        </div>
                                        <p class="MuiTypography-root MuiTypography-body1 list-text css-ruywmq"></p>

                                    </div>







                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <nav>
                <div className='menu'>
            <input type="checkbox" id="check"/>
                    <lable for="check">
                    <i class="fas fa-bars" id="btn"></i>
                    <i class="fas fa-times" id="cancle"></i>
            </lable>
            
                    
                <div className='saidbar'>
                
                    <h1>menubar</h1>
                    <ul>
                        <li><a href="#">home</a></li>
                        <li> <a href="#">about us</a></li>
                        <li> <a href="#">categories</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                   </div> 
                   </div>
                   
                    
                
                <ul>
                    { /*{
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
                        <Link to='/about'>About us</Link>
                    </li>


                    <li>
                        <p
                            onClick={() => setOpen(!open)}
                        >Categories
                            {
                                open ?
                                    <>
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1wcdte9" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowUpIcon">
                                        <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
                                    </svg>
                                    </>
                                    : 
                                    
                                    <>
                                    
                                    {
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1wcdte9" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowDownIcon"><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
                                    }
                                    {/* // <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1wcdte9" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowUpIcon">
                                    //     <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
                                    // </svg> */}
                                    </>
                                    
                                }
                        </p>
                        {
                            open ?
                                <div className='drop-down'>

                                    {/* {
                data?.[0]?.categories?.root?.level1
                
                ?.map((item, index) => {
                    return (
                        <div className='drop-down'>
                            <a >
                                <img src={item?.name
} />
                                <p></p>
                                

                            </a>
                        </div>
                    )
                })
            }
*/}


                                    <ul>
                                        <li><h5>Antic</h5>
                                            <li><a href="#">kunguma simil</a></li></li>
                                        <li> <h5>COW WITH CALF</h5></li>
                                        <li>  <h5>GIFT ITEMS</h5>
                                            <li><a href="#">kudam</a></li></li>
                                        <li><h5>KAMATcHI VILAKKU</h5>
                                            <li><a href="#">astalakshmi vilakku</a></li>
                                            <li><a href="#">gajalahshmi vilakku</a></li>
                                            <li><a href="#">glass annaiya vilakku</a></li>
                                            <li><a href="#">global vilakku</a></li>
                                            <li><a href="#">kamatchi vilakku jeysreeka</a></li>
                                            <li><a href="#">kamatchi vilakku meenakshi</a></li>
                                            <li><a href="#">kamatchi vilakku sridevi</a></li>
                                            <li><a href="#">karumbu kamatchi vilakku</a></li>
                                            <li><a href="#">pavai vilakku</a></li>
                                            <li><a href="#">pradhosha vilakku</a></li>
                                            <li><a href="#">sivalinga vilakku</a></li>
                                            <li><a href="#">tortoise vilakku</a></li>
                                        </li>
                                        <li><h5>KICHEN</h5>
                                            <li><a href="#">coffee filter</a></li>
                                            <li a href="#">plates</li></li>
                                        <li><h5>POOJA ITEMS</h5>
                                            <li><a href="#">chombu</a></li>
                                            <li><a href="#">dhoobakkal</a></li>
                                            <li><a href="#">dhoop arti</a></li>
                                            <li><a href="#">kudam</a></li>
                                            <li><a href="#">lamp-amman</a></li>
                                            <li><a href="#">lamps</a></li>
                                            <li><a href="#">mani-nadhi</a></li>
                                            <li><a href="#">mani vel</a></li>
                                            <li><a href="#">pooja set</a></li>
                                            <li><a href="#">pooja set ordinary</a></li>
                                            <li><a href="#">sooda karandi</a></li>
                                            <li><a href="#">sooda ubasara set</a>
                                                <li><a href="#">wedding set</a></li>
                                            </li>
                                        </li>
                                    </ul>


                                </div>
                                : ''
                        }
                    </li>


                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    
<li>
    <Link to='registration'>Registration</Link>
</li>



                </ul>
            </nav>


        </div>



    )
}
export default Index
