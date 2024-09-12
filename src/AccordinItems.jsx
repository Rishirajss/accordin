import React, { useState } from 'react'

export default function AccordinItems({num, title, text}) {

    let [isOpen, setisOpen] = useState(false);

  return (
    
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={()=> setisOpen(!isOpen)}>  
          <p className='number'> {num < 9 ? `0${num + 1}` : `${num + 1}`} </p>  
          <p className='title'> {title} </p>  
          <p className='icon'>{isOpen ? '-' : '+'} </p>  
          {isOpen && <div className='content-box'> {text} </div>}
    </div>
  )
}
