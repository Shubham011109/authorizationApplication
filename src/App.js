import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Cookies from 'js-cookie'
import Home from './component/home'
import Login from './component/loginForm'
import './App.css';
import { useEffect } from "react";
import ProtectedRoute from './component/protectedRoute';
import LoginForm from './component/loginForm';

function App() {
  
  return (
    <Router>
    <>
      <Routes>
        <Route exact path='/' element={<ProtectedRoute/>}>
        </Route>
        <Route exact path='/login' element={<ProtectedRoute/>}/>
      </Routes>
    </>
  </Router>
  )
}

export default App;
