import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import About from './components/Home/About';
import Blogs from './components/Home/Blogs';
import Home from './components/Home/Home';
import ProjectDetails from './components/Home/ProjectDetails';
import ProjectDetails1 from './components/Home/ProjectDetails1';
import ProjectDetails2 from './components/Home/ProjectDetails2';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/home' element={<Home></Home>}></Route>
        <Route exact path='/home' element={<Home></Home>}></Route>
        <Route exact path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='projectDetails' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='projectDetails1' element={<ProjectDetails1></ProjectDetails1>}></Route>
        <Route path='projectDetails2' element={<ProjectDetails2></ProjectDetails2>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
