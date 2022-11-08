const Login = (props) => {
  return (
    <div>
      <h1>Welcome Back</h1>
      <h3>Please enter your login credentials</h3>
      <form>
        <input type ='text' placeholder='username' required/>
        <input type ='password' placeholder='password' required/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login