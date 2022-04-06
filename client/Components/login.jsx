import React from 'react';
import { useNavigate, useNavigation} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const username = React.createRef();
  const password = React.createRef();

  return (
    <div>
      <form>
        <div className = "loginText">Welcome Back to CryptoTracker</div>
        <input ref = {username} placeholder = "username" required></input>
        <input ref = {password} placeholder = "password" required></input>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  )
}

export default Login;