import React, { useState,useEffect } from "react"
function Useeffectclass(){
    const[time,setTime]=useState(new Date().toString());
    const [message,setmessage]=useState("class component")
    
    
    
    useEffect(()=>{
        console.log("component mounted or updated")
        },[time]); 
    
    

    componentDidUpdate(){
        console.log("didupdated condition")
    }
    componentWillUnmount(){
        console.log(" willunmount")
    }
    const showDate=()=>{
        setTime(new Date().toString());
    return(
        <div>
            <div>{time}</div>
            <button onclick={showDate}>showDate</button>
            <div>{message}</div>
            <button onClick={()=>setmessage("change Functional component")}>change message</button>
        </div>
    )

}
}
export default Useeffectclass

