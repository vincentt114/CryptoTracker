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
      < button onClick = {() => setDisplay(!displayLogin)}> Sign up for an Account </button>
    </div>
  )
}
export default App;
