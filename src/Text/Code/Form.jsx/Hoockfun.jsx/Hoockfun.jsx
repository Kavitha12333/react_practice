import React,{useState} from "react";
 import Classcomponent from "./Classcomponent";
 import Functioncomp from "./Functioncomp";
import { CounterContext } from "./Countercontext";

let Hoockfun=()=>{
    const[counter,setcounter]=useState(0);
    const increment=()=>{
        setcounter(counter+1);

    };
    const decrement=()=>{
        setcounter(counter-1);
    };



return(
    <div className="Hoockfun">
        <h1>hoockfunction</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
         {/*<CounterContext.Provider value={{counter,setcounter}}> 
            <Functioncomp />
            <hr></hr>

</CounterContext.Provider> */}


    </div>
)
}
export default Hoockfun