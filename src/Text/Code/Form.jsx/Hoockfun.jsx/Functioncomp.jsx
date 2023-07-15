import React, { useContext } from 'react'
import { CounterContext } from './Countercontext'

 const Functioncomp=()=>{
    const {counter,setcounter}=useContext(CounterContext);;
  return (
    <div>
    <h1>Functioncomp</h1>
    <h2>{counter}</h2>
    <button onClick={()=>setcounter(counter+1)}>increment</button>
    <Fchild />
    </div>
  )
}
const Fchild=()=>{
    const {counter,setcounter}=useContext(CounterContext);
    return(
        <div>
            <h1>Function child component</h1>
            
            <h2>{counter}</h2>
            <button onClick={()=>setcounter(counter-1)}>decrement</button>
        </div>
    )
}
export default Functioncomp