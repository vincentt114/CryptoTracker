import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(null);
  const [id, setID] = useState(null);

  //makes a fetch to check if login info is correct
  const handleClick = (e) => {
    e.preventDefault()
    fetch('http://localhost:8000/users?' + new URLSearchParams({
      username: username.current.value,
      password: password.current.value
    }))
      .then((data) => data.json())
      .then((data) => {
        setSuccess(data.status)
        setID(data.id)
      })
  }

  //routes based on whether or not login info is correct
  useEffect(() => {
    const status = document.getElementById('success')
    //successful account creation should redirect to main page 
    if (success === true) navigate('/main', {state:{id:id}})
    else if (success === false) status.innerHTML = 'Wrong Username/Password'
  })
  
  const username = React.useRef(null);
  const password = React.useRef(null);

  return (
    <div>
      <h1>Welcome Back</h1>
      <h3>Please enter your login credentials</h3>
      <form>
        <input type ='text' placeholder='username' ref={username} required/>
        <input type ='password' placeholder='password' ref={password} required/>
        <button onClick = {handleClick}>Login</button>
      </form>
      <div id='success'></div>
    </div>
  )
}

export default Login