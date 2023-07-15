import React,{useState,useRef,useEffect} from 'react'

 const Useref = () => {
    /*
    1.DOM reference
    2.useRef for storing the previous state
    3.hold mutable value prevent re-render of component
    useref is not only use dome access we can also hold previous valuse b/w rerenders
    */
    const[name,setName]=useState("");
    //once we import useref i will creact reference variable
    const [counter,setcounter]=useState(0);
    const inputE1=useRef("");
    const previouscounterRef=useRef("");
    console.log(inputE1)
    const resetInput=()=>{
        setName("");
        inputE1.current.focus();
        inputE1.current.Value="kavith"
    };
    //when we want to call thise use effect whenever random counter will changes
    useEffect(()=>{
        previouscounterRef.current=counter;

    },[counter])
  return (
    <div className='data'>
    
    <div>
        <input ref={inputE1} name="name" autoComplete='off' type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={resetInput}>Rest</button>
    </div>
    <div>my name is{name}</div>
    <div>
        <h1>Random Counter:{counter}</h1>
        {typeof previouscounterRef.current !=="undefined" &&(
            <h2>previous counter:{previouscounterRef.current}</h2>
        )}
        <button onClick={(e)=>setcounter(Math.ceil(Math.random()*100))}>
            gender
        </button>
    </div>
        
        
    </div>
  );
}
export default Useref
