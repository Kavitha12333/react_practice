import React from 'react'
import "./style.scss"
 const Index = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <input type="radio" name="select" id="option-1"/>
        <input type="radio" name="select" id="option-2"/>
        <label for="option-1" className='option option-1'>
          <div className='dot'></div>
          <span>Student</span>
        </label>
        <label for="option-2" className='option option-2'>
          <div className='dot'></div>
          <span>Teacher</span>
        </label>
      </div>
    </div>
  )
}
export default Index
