import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import SignUp from './Pages/Login/SignUp';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Pages/Shared/NavBar';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/signUp' element={<SignUp></SignUp>} ></Route>
      </Routes>
    </>
  );
}

export default App;
