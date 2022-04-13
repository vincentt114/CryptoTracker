import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Login from './Components/login';
import Signup from './Components/signup';
import Main from './Components/main';

const container = document.getElementById('root');
const root = createRoot(container);

class App extends React.Component {

  render() {
    return (
      <div>
      <Router>
          <Routes>
              <Route exact path='/' element={<Login/>} />
              <Route exact path='/signup' element={<Signup/>} />
              <Route exact path='/main' element={<Main/>} />
          </Routes>
      </Router>
  </div>
    )
  }
}

root.render(<App />)