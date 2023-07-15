import React from 'react'
import Imagedata from './Imagedata'
 const Imgslider = () => {
    const slider=Imagedata.map((data,index)=>{
        return <div className="slide" key={index}>
            <img src={data.src}alt={data.alt}/>
</div>    })
  return (
    <div className='slider'>
        {Imgslider}
    </div>
  )
}
export default Imgslider
