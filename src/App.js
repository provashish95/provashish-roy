import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<p>404</p>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
