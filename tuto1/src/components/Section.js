import React from 'react'
import { useState } from 'react'
import { Data } from './Data'
import Header from './Header'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import './Section.css'

const Section = ({slides}) => {

  const [current, setCurrent]=useState(0)

  const length =slides.length

  return (
    <section>
     {/* <Header/> */}

     <div className="buttons">
      <ArrowBackIosNewOutlinedIcon className='left-btn' onClick={()=>setCurrent(current===0 ? length -1:current -1)} />
      <ArrowForwardIosOutlinedIcon className='right-btn' onClick={()=>setCurrent(current===length -  1 ? 0:current + 1)} />
     </div>

     <div className="content">
      <h2>Discover Our Content</h2>
      <button className='btn'>Discover</button>     
      <button className='btn'>Read more</button>
     </div>

      <div className="slide">
        {Data.map((slide, index)=>{
          return(
            <div  key={index}className={index===current ? 'slides active':'slides'}>
                   {index===current &&(
                <img className='slide-img' src={slide.image} alt="" />
)}

            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Section