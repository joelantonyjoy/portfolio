import React from 'react';
import './App.css';
import {Home} from './Pages/Home/Home';
import {Blog} from './Pages/Blog';
import {Projects} from './Pages/Projects';
import {Contact} from './Pages/Contact/Contact';
import {Whoops404} from './Pages/Whoops404';
import {Jokes} from './Pages/Projects/Jokes/Jokes';
import Pomodoro from './Pages/Projects/Pomodoro/Pomodoro';
import logo_web from './assets/images/logo-full.svg';
import logo_mobile from './assets/images/logo-short.svg';
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
  <img className="navbar-logo" src={logo_web} alt='joel'></img>
  <nav className="navbar">
    <Link className="link" to="/">HOME</Link>
    <Link className="link" to="projects">PROJECTS</Link>
    <Link className="link" to="blog">BLOG</Link>
    <Link className="link" to="contact">CONTACT</Link>
  </nav>
  </div>
  <div className="nav-small">
  <img class="navbar-logo-mob" src={logo_mobile} alt="joel"></img>
  <div className="toggle__button" onClick={toggle}>=</div>
  <nav className="navbar-small">
    <Link onClick={closeMenu} className="link-small" to="/">HOME</Link>
    <Link onClick={closeMenu} className="link-small" to="projects">PROJECTS</Link>
    <Link onClick={closeMenu} className="link-small" to="blog">BLOG</Link>
    <Link onClick={closeMenu} className="link-small" to="contact">CONTACT</Link>
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