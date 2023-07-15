import React,{Component} from 'react';


class Classfr extends React.Component{
    state={
         username:"",email:"",password:"",
    }
/*nameHandler=(event)=>{
        //using event by capturing the value
        this.setState({name:event.target.value})
    }
    //why we are using fatarrow function -we are going to update componentstat
    emailHandler=(event)=>{
        this.setState({email:event.target.value})
    }
passwordHandler=(event)=>{
    this.setState({password:event.target.value})
}*/
formData=(event)=>{
    this.setState({[event.target.name]:event.target.value})
}
submitHandler=(event)=>{

   //this.setState({submit:event.target.value})this is normal html behavior 
   event.preventDefault()//when we click sumitbutton that will not loose data in the form 
}

    render(){
        return(
        
            <div className='container '>
                
                <pre>{JSON.stringify(this.state)}</pre>
                
                
                <form onSubmit={this.submitHandler}>
                    <h1>Registration form</h1>
                    <div className='field'>
                        <label>username</label>
                    
                       <input type="text"placeholder='username' onChange={this.formData} name="username"/>
                    

                        </div>
                      <div className='field'>
                        <label>email</label>
                        <input type="text" placeholder='email' onChange={this.formData} name="email"/>
                        </div>
                        <div className='field'>
                        <label>password</label>
                        <input type="text" placeholder='password' onChange={this.formData}name="password"/>
                        </div>
                        <div className='field'>
                        <button>submit</button>
                        </div>
                        


</form> 
</div>
        
        )

    }
}


  
export default Classfr
