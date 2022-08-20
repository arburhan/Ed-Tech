import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import SignUp from './Pages/Login/SignUp';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Pages/Shared/NavBar';
import Login from './Pages/Login/Login';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/signUp' element={<SignUp></SignUp>} ></Route>
        <Route path='/logIn' element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
