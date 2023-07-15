import React,{ useState, useReducer } from 'react';
const initialState=[{id:Date.now(),name:"kavitha",email:"kavitha8861@gmail.com"},];
function reducer(state,action){
    switch (action.type){
        /*case"increment":
        return state +1;
        case "decrement":
        return state-1;
        default:
            throw new Error()
    }
}
*/
 case"add":
        return [...state,action.payload];//submitin formate using spred operatoe to get the initial state
        case "delete":
        return state.filter(contact=>{
            return contact.id!==action.payload;
        });
        default:
            throw new Error()
    }
}

 function User(){
    //const[counter,setCounter]= useState(0);
    const[state,dispatch]=useReducer(reducer, initialState);
    const [name,setname]=useState("");
    
    const [email,setemail]=useState("");
    console.log(state);
   // const increment=()=>{
       // setCounter(counter +  1);
   // };
   // const decrement=()=>{
   //     setCounter(counter - 1);
   // };
    const addcontact=(e)=>{
        //page will not refresh using e.preventDefault
        e.preventDefault();
        const contact={
            id:Date.now(),
name,

email
        }
        setname("");
        
        setemail("");
        dispatch({type:"add",payload:contact})
    };
        
  return (
    <div>
        <h1>using reduser</h1>
        <form onSubmit={addcontact}>
        <input type="text" placeholder='name'value={name} onChange={(e)=>setemail(e.target.value)}/>
    
            
             <input type="text" placeholder='email'value={email} onChange={(e)=>setemail(e.target.value)}/>
            <button>nsdb</button>
        </form>
        <div>
            <ul>
                {state.map(contact=>{
                   return( <li key={contact.id}>
                        <h2>{contact.name}</h2>
                        <h2>{contact.email}</h2>
                        <div>
                            <button conclick={()=>dispatch({type:'delete',payload:{id:contact.id}})}>delete</button>
                        </div>
                    </li>
                   );
                })}
            </ul>
        </div>
        
        
        {/*<button onClick={()=>dispatch({type:"increment"})}>increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>*/}
        
    </div>
  );
  
}
export default User
{/*
import React,{ useState } from 'react';

 function User(){
    const[counter,setCounter]= useState(0);
    
    const increment=()=>{
        setCounter(counter +  1);
    };
    const decrement=()=>{
        setCounter(counter - 1);
    };
    
        
  return (
    <div>
        <h1>using reduser</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>increment</button>
        <button onclick={decrement}>decrement</button>
    </div>
  )
}
export default User

*/}
