import React from 'react';
import './App.css';
import {Home} from './Pages/Home';
import {Blog} from './Pages/Blog';
import {Projects} from './Pages/Projects';
import {Contact} from './Pages/Contact';
import {Whoops404} from './Pages/Whoops404';
import {Jokes} from './Pages/Projects/jokes/Jokes';
import Pomodoro from './Pages/Projects/pomodoro/Pomodoro';

import {Routes,Route,Link} from 'react-router-dom';

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