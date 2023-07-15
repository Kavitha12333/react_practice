import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from "../Header"
import Home from "../Home"
import Footer from "../Footer"
const Index = (props) => {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   axios.get("https://dev.backend.swaminathan.navabrinditsolutions.com/rest/V1/swaminathan/getheaderfooter").then(
  //     //Response=>  console.log(Response.data)
  //     //assingn a variable
  //     Response => setData(Response.data)
  //   )
  // }, [])
  // console.log(data, "data header   jk")
  return (
    <div>
      {/* <Header data={data} /> */}
      
      <Home />
      
      {/* <Footer data={data} /> */}
    </div>)
}
export default Index