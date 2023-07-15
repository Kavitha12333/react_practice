import React,{useState,useMemo} from 'react'
 const Usememo = () => {
    /*
    1.optimize expensive operation
    2.Referential equality
    */
   //callback function
   // Memoize the function(useallbavk)vs memoize the value(usememo)
   //referential equality for fuctions
   const[counter,setCounter]=useState(1);
   const result=useMemo(()=>{
    return factorial(counter);

   },[counter]);
   const[name,setName]=useState("");
  return (
    <div>
        <h1>
        Factorial of {counter}is:<span>{result}</span>
        </h1>
        <div>
            <button onClick={()=>setCounter(counter-1)}>decrement</button>
            <button onClick={()=>setCounter(counter+1)}>increment</button>
        </div>
        <div>
            
            <input type="text" placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
            
            <DisplayName name={name}></DisplayName>
        </div>
        </div>

  );
}
const DisplayName= React.memo(({name})=>{
    console.log("rendered");
    return <p>{'my name is ${name}'}</p>


})

function factorial(n){
    if(n<0){
        return-1;

    }
    if(n===0){
        return 1;
    }
    return n*factorial(n-1);
}
export default Usememo

/*{
    "customer_id": "",
    "name": "demo",
    "email": "tes12@gmail.com",
    "phone": "+911331456712",
    "phone_valid": "1331456712",
    "message": "Hi\n"
}

{
    "data": {
        "customer_id": "",
        "name": "demo",
        "email": "tes12@gmail.com",
        "phone": "+911331456712",
        "phone_valid": "1331456712",
        "message": "Hi\n"
    }
}