import React, { useState } from "react"
import {Todoform}from'./Todoform'
import {v4 as uuidv4}from'./uuid'
import {Todo}from'./Todo';
uuidv4();
const Todowrapper=()=>{
    const [Todos,setTodos]=useState([])
    const addTodo=todo=>{
        setTodos([...Todos,{id:uuidv4(),task:todo,
            completed:false,isEditing:false}])
            console.log(Todos)

        }
    
    return(
        <div className="container">
            <Todoform addTod={addTodo}/>
            {Todos.map((todo,index)=>(
                <Todo task={todo}key={index}/>
                )) }
                           <Todo/>

        </div>

    )
        
    
}
export default Todowrapper