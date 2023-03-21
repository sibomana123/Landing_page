import React, { useState } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import { MenuData } from './MenuData';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

  const [show, setShow]=useState(false)
  
   const showMenu =()=>{
  setShow(!show)
 }

  return (
    <div className='header'>
      <div className="navbar">

        <div className="left">
          <MenuOutlinedIcon className='menu-icon' />
          <div className='shop-arrow'>
          <button className='shop'>Shop</button>
          <ArrowForwardIcon className='arrow-icon'/>
          </div>
        </div>

        <div className="center">
          <h1>Emmanuel</h1>
        </div>

        <div className="right">
        <SearchIcon className='search-icon'/>
        <button className='shop'>Cart</button>

        </div>
      </div>

      <nav className={show ? 'nav-item active':'nav-item'}>
      <ul>
        {MenuData.map((item, index)=>{
          return(
            <li  key={index} className={item.className}>
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
            </li>


          )
        })}
      </ul>
      </nav>

    </div>
  )
}

export default Header