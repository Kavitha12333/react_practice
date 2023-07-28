import React from 'react'
import"./style.scss"
 const Index = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='title'>choose your course</div>
        <div className='cards'>
          <input type="radio" name="box" id="one"/>
          <input type="radio" name="box" id="two"/>
          <input type="radio" name="box" id="three"/>
          <label for="one" class="box first">
<div className='course'>
  <span className='circle'></span>
  <span className='subject'>html & css</span>
</div>
<span class="price">100$/year</span>
          </label>
          <label for="two" class="box second">
<div className='course'>
  <span className='circle'></span>
  <span className='subject'>html & css</span>
</div>
<span class="price">100$/year</span>
          </label>
          <label for="three" class="box third">
<div className='course'>
  <span className='circle'></span>
  <span className='subject'>html & css</span>
</div>
<span class="price">100$/year</span>
          </label>
        </div>
      </div>
      </div>
  )
}
export default Index
