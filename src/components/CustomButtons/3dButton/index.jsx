import React from 'react'
import'./index.css'
import { FaLocationArrow } from "react-icons/fa";



function index({title='My Work', icons=<FaLocationArrow  className='text-gray-700' size={15}/>}) {
  return (
    <div class="container">
         <div  class="button">
            <div class="button__content">
               <span class="button__text text-gray-700">{title}</span>
               {icons}
               <div class="button__reflection-1"></div>
               <div class="button__reflection-2"></div>
            </div>
            
           
            
            
         </div>
      </div>
  )
}

export default index