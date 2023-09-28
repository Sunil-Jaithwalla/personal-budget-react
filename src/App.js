import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Menu from './Menu/menu';
import Hero from './Hero/Hero';
import Homepage from './Homepage/Homepage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/Loginpage';

function App() {
  return (
    // <Router>

    //  <div className='mainContainer'>
    //   <Switch>
    //     <Route path="/about">
    //       <AboutPage/>
    //     </Route>
    //     <Route path="/login">
    //       <LoginPage/>
    //     </Route>
    //     <Route path="/">
    //       <Homepage/>
    //     </Route>
    //   </Switch>
    //  </div>
    //  <Footer></Footer>
    // </Router>

    <Router>
      <div className="mainContainer">
        <Menu/>
        <Hero/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/login' element={<LoginPage/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

