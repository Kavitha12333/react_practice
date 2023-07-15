import {useState, useEffect} from "react"
import "./App1.css"
function Form (){
    let initialValues={username:"",email:"",password:"" };
    const[formValues,setformvalues]=useState(initialValues);
    const[formErrors,setformErrors]=useState({});
    const[isSubmit,setIsSubmit]=useState(false)
   const handlechange=(event)=>{
        
        const{name,value}=event.target;
        setformvalues({[name]:value});
        

    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        setformErrors(validate(formValues));
        setIsSubmit(true);

    };
    useEffect(()=>{
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){

            console.log(formValues);
        }

    },[formErrors])
    const validate=(values)=>{
        const errors={};
        const regex= /^[^\s@]+@[^\s@]+\.[^\s]{2,}$/i;
        if(!values.username){
            errors.username="pls enter valid name";
        }
        if(!values.email){
            errors.email="pls enter valid data";
        }
        else if(!regex.test(values.email)){
            errors.email="this is not a valid email"
        }
        if(!values.password){
            errors.password="pls enter valid data";
        }
        else if(values.password <4){
            errors.password="must 6 characters"
        }
        else if(values.password >10){
            errors.password="must 6 characters"
        }
        if(!values.contact){
            errors.contact="pls enter valid data";
        }
        return errors;
    }

    return(
    <div className="text">
    
         <div className="container">
         
            <pre>{JSON.stringify(formValues,undefined,2)}</pre>
        
            
                <form onSubmit={handleSubmit}>
            <h1>Form validation</h1>
            <div className="field">
                <h3>username</h3>
                <label>username</label> 
                <input type="text"placeholder="username" onChange={handlechange}name="username"/>           
                </div>
                <p>{formErrors.username}</p>
                <div className="field">
                    <h3>email</h3>
                <label>email</label> 
                <input type="text"placeholder="email" onChange={handlechange} name="email"/>           
                </div>
                <p>{formErrors.email}</p>
                <div className="field">
                    <h3>password</h3>
                <label>password</label>
                <input type="text"placeholder="password" onchange={handlechange} name="password"/>           
                </div>
                <p>{formErrors.password}</p>
                
                <div className="field">
                    <h3>contact</h3>
                <label>contact</label> 
                <input type="text"placeholder="contact" onchange={handlechange} name="contact"/>           
                </div>
                <p>{formErrors.contact}</p>
                <div className="btn">
             <button>submit</button>        
                </div>
                </form>
                </div>
        

    </div>
)
}
export default Form