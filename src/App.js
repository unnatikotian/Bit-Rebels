import './App.css';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Admin from './Pages/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="signup" element={<Signup/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
          <Route path="admin" element={<Admin/>}></Route>



        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
