import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import ScrollToTop from './components/ScrollToTop';
// import ScrollToTop from "./components/ScrollToTop"
 

function App() {
  return (
    // <BrowserRouter>
    // <NavBar />
    //   <Routes>
    //     <Route element={<Home />} path='/' />
    //     <Route element={<About />} path='/about' />
    //     <Route element={<SinglePost />} path='/post/:slug' />
    //     <Route element={<Post />} path='/post' />
    //     <Route element={<Project />} path='/project' />
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
    <ScrollToTop />
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
        <Route component={Contact} path='/contact' />
      </Switch>
    <Footer />
    </BrowserRouter>
    
  )
}

export default App;



