import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import Cookies from 'js-cookie'

import './index.css'


const LoginForm = () => {


  const navigate = useNavigate();
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error,setError]=useState('')

  const handletoken = async (token) => {
    const jwtToken = await Cookies.set('jwttoken', token)
    navigate('/');
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    const newObj = {}
    const postObj = { ...newObj, userName, password }
    const url = "https://dummyjson.com/auth/login"
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username:userName,
        password:password
      }),
    }
    const response = await fetch(url, options)

    const data = await response.json()
    if (data.token) {
      handletoken(data.token)
    }
    setError(data)
    console.log(data.message);

  }


  return (
  
   <div className='loginForm'>
      <div className="loginImage">
        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="" />
      </div>
      <form className="login" onSubmit={(event) => { handleSubmit(event) }}>
        <div className='loginContainer'>
          <label htmlFor='user'>UserName</label>
          <input type="text" id="user" onChange={(e) => { setUserName(e.target.value) }} value={userName} />
          <label htmlFor='pass'>Password</label>
          <input type="password" id="pass" onChange={(e) => { setPassword(e.target.value) }} value={password} />
          <button type="submit">Submit</button>
          
          <div className='credentials'>
          <p className='span'>{error.message}</p>
            <h6>Credentials to be used:</h6>
          <p>username:kminchelle</p>
          <p>password:0lelplR</p>
          </div>
         
        </div>
      
      </form>
  
    </div> 
    
 
  )
}

export default LoginForm