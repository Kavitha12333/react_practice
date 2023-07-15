import React from 'react'
import {FontAwesomeIcon}from'@fontawesome/react-fontawesome'
import{fapenTosquare} from '@fortawesome/free-solid-svg-icons'
import{faTrash}from'@fortawesome/free-solid-svg-icons'
const Todo = ({task}) => {
  return (
    <div className="Todo">
<p>{task.task}</p>
<div>
    <FontAwesomeIcon icon={fapenTosquare}/>
    <FontAwesomeIcon icon={fapenTosquare}/>
</div> 
    </div>
  )
}
export default Todo
