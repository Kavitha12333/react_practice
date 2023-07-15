import React,{useEffect,useState} from 'react'

import axios from 'axios'
//useEffect will take two arguments 1.arrowfunction 2.dependency
 const Api = () => {
    const[data,setData]=useState([1])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(

          //Response=>  console.log(Response.data)
          //assingn a variable
          Response=>setData(Response.data)
        )

        
            
    },[])
  return (
    //how to print data 1 by 1?using map method
    // we should use key property because more than onedata will be same  then it will display error
    <div>
        {
            data.map(item=>  <li key={item.id}>{item.title}</li>)
        }
    
    </div>
  )
}
export default  Api
