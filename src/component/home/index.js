import { Link,Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import React from 'react'
import './index.css'
import Header from './../header/index'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  
  const jwtToken = Cookies.get('jwttoken')
  if (jwtToken === undefined) {
    navigate('/login');
  }


  return (
 
      <div>
      <Header />
      <Link href='/'>  <div className="home_Container">
        <div className='content'>
          <h3>Thanks for Shopping Now.</h3>
          <p>We will look into it</p>
        </div>
        <div className="img-container">
          <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" alt="" />
        </div>
      </div></Link>
    </div> 
  )
}

export default Home