import {useState} from 'react'
import Login from './Login.js'
import Signup from './Signup.js'

const Home = () => {
  const [displayLogin, setDisplay] = useState(true)

  return(
    <div>
      {displayLogin && < Login />}
      {!displayLogin && < Signup />}
      <br/>
      < button onClick = {() => setDisplay(!displayLogin)}> {displayLogin ? 'Sign up for an Account' : 'Back to Sign In'}</button>
    </div>
  )
}

export default Home;
