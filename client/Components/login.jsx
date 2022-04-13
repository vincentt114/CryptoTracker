import React from 'react';
import { useNavigate, useNavigation} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const username = React.createRef();
  const password = React.createRef();

  const submitLogin = (event, user, pass) => {
    event.preventDefault();
    if (user.current.value === "test" && pass.current.value === "test") navigate('/main')
    else alert('incorrect info!')
  }

  return (
    <div>
      <form onSubmit={(event) => submitLogin(event, username, password)}>
        <div className = "loginText">Welcome Back to CryptoTracker</div>
        <input ref = {username} placeholder = "username"></input>
        <input ref = {password} placeholder = "password"></input>
        <button type="submit">LOGIN</button>
      </form>
      <button type="signup" onClick={() => navigate('/signup')}>SIGNUP</button>
    </div>
  )
}

export default Login;