import React from 'react';
import './App.css';
import {Home} from './Pages/Home/Home';
import {Blog} from './Pages/Blog';
import {Projects} from './Pages/Projects';
import {Contact} from './Pages/Contact/Contact';
import {Whoops404} from './Pages/Whoops404';
import {Jokes} from './Pages/Projects/Jokes/Jokes';
import Pomodoro from './Pages/Projects/Pomodoro/Pomodoro';

import {Routes,Route,Link} from 'react-router-dom';

function toggle(e){
  if(document.getElementsByClassName("navbar-small")[0].style.display === "none"){
    document.getElementsByClassName("navbar-small")[0].style.display = 'block';
    document.getElementsByClassName("toggle__button")[0].innerHTML = 'x';
    
  } else{
    document.getElementsByClassName("navbar-small")[0].style.display = 'none';
    document.getElementsByClassName("toggle__button")[0].innerHTML = '=';
  }
}

function closeMenu(){
    document.getElementsByClassName("navbar-small")[0].style.display = 'none';
}

function App() {
return (
  <React.Fragment>
  <div className="nav-container">
  <nav className="navbar">
    <Link className="link" to="/">Home</Link>
    <Link className="link" to="projects">Projects</Link>
    <Link className="link" to="blog">Blog</Link>
    <Link className="link" to="contact">Contact</Link>
  </nav>
  </div>
  <div className="nav-small">
  <div className="toggle__button" onClick={toggle}>=</div>
  <nav className="navbar-small">
    <Link onClick={closeMenu} className="link-small" to="/">Home</Link>
    <Link onClick={closeMenu} className="link-small" to="projects">Projects</Link>
    <Link onClick={closeMenu} className="link-small" to="blog">Blog</Link>
    <Link onClick={closeMenu} className="link-small" to="contact">Contact</Link>
  </nav>
  </div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/blog" element={<Blog/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<Whoops404/>} />

      {/* Project routes should be added here */}
      <Route path="projects/jokes" element={<Jokes/>} />
      <Route path="projects/pomodoro" element={<Pomodoro/>} />
    </Routes>
    </React.Fragment>
)
}

export default App;