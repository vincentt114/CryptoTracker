import './App.css';
import {useState} from 'react'
import Login from './components/Login.js'
import Signup from './components/Signup.js'

const App = () => {

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
export default App;
