import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home.js'
import Main from './components/Main.js'
const App = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path='/main' element={< Main/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
