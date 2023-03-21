import React from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css'
import Cookies from 'js-cookie'

const Header = () => {

  const navigate = useNavigate();

  const Handlelogout=(event)=>{
    event.preventDefault()
    Cookies.remove('jwttoken')
    navigate('/login')
  }

  return (
    <div className="header">
        <div className="logo">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt=""/>
        </div>
        <div className="sideItem">
            <p onClick={Handlelogout}>Logout</p>
        </div>
    </div>
  )
}

export default Header