import React, { useState, useEffect } from 'react';

const Signup = (props) => {

  const [success, setSuccess] = useState(null)

  const handleClick = (e) => {
    e.preventDefault()
    fetch('http://localhost:8000/users?' + new URLSearchParams({
      username: username.current.value,
      password: password.current.value
    }), 
      {method: 'POST'})
      .then((data) => data.json())
      .then((data) => setSuccess(data.status))
  }

  useEffect(() => {
    const status = document.getElementById('success')
    //successful account creation should redirect to main page 
    if (success === true) status.innerHTML = `Account Successfully Created, Please Sign in ${username.current.value}`
    else if (success === false) status.innerHTML = 'Username Already Taken, Please Try Again'
  })

  const username = React.useRef(null);
  const password = React.useRef(null);

  return (
    <div>
      <h1>Welcome to the Family</h1>
      <h3>Please create a Username and Password</h3>
      <form>
        <input type ='text' placeholder='username' ref={username} required/>
        <input type ='password' placeholder='password' ref={password} required/>
        <button onClick={handleClick}>Signup</button>
      </form>
      <div id='success'></div>
    </div>
  )
}

export default Signup