import './App.css';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Signup from './Pages/Signup';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="signup" element={<Signup/>}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
