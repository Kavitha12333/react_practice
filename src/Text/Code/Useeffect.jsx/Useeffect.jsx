import React, { useState,useEffect } from "react"
function Useeffect(){
    const[time,setTime]=useState(new Date().toString());
    const [message,setmessage]=useState("functional component")
    useEffect(()=>{
        console.log("component mounted or updated")
        //if we want to call the function  only the first time when the component is mounted and not the state is update then we can 
        //passe the secod argument that will be an empty array 
   // UseEffect(()=>{
    //console.log("component mounted or updated")
    //},[]); if we want call useeffect function only once when the component is mounted we wiill pass empty array
    });
    useEffect(()=>{
        console.log("component mounted or updated")
        const interval =setInterval(showDate,10)
        },[time]); 
    
    const showDate=()=>{
        setTime(new Date().toString());
    }
    return(
        <div>
            <div>{time}</div>
            <button onclick={showDate}>showDate</button>
            <div>{message}</div>
            <button onClick={()=>setmessage("change Functional component")}>change message</button>
        </div>
    )

}
export default Useeffect

