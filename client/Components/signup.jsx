import React from 'react';
import { useNavigate, useNavigation} from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const username = React.createRef();
  const password = React.createRef();

  return (
    <div>
      <form>
        <div className = "loginText">Welcome to the CryptoTracker Family</div>
        <input ref = {username} placeholder = "username" required></input>
        <input ref = {password} placeholder = "password" required></input>
        <button type="submit">SIGNUP</button>
        <button type="submit" onClick={() => navigate('/')}>BACK TO LOGIN</button>
      </form>
    </div>
  )
}

export default Signup;