import React from 'react';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import {Blog} from './pages/Blog';
import {Home} from './pages/Home';
import {Projects} from './pages/Projects';
import {Contact} from './pages/Contact';
import {Whoops404} from './pages/Whoops404';
import {Jokes} from './pages/projects/jokes/Jokes';
import Pomodoro from './pages/projects/pomodoro/Pomodoro';

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