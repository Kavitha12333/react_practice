import React, { useState } from 'react'

 const Todoform = ({addTodo}) => {
  const[value, setValue]=useState("")
  const handleSubmit=(event)=>{
    event.preventDefault();
    addTodo(value);
    setValue("")
  }
  return (
    <div>
      <h1>hello</h1>
      <form>
        <label></label>
        <input type="text" value={value} placeholder='what is the task today' onchange={(event)=>setValue(event.target.value)}/>
        <button type="submit">add task</button>

      </form>
    </div>
  )
}
export default Todoform
