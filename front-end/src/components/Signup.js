const Signup = (props) => {
  return (
    <div>
      <h1>Welcome to the Family</h1>
      <h3>Please create a Username and Password</h3>
      <form>
        <input type ='text' placeholder='username' required/>
        <input type ='password' placeholder='password' required/>
        <button>Signup</button>
      </form>
    </div>
  )
}

export default Signup