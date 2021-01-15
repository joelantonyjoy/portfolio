import React from 'react';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import {Blog} from './Pages/Blog';
import {Home} from './Pages/Home';
import {Projects} from './Pages/Projects';
import {Contact} from './Pages/Contact';
import {Whoops404} from './Pages/Whoops404';
import {CompanyHisotry} from './Pages/CompanyHisotry';
import {Location} from './Pages/Location';
import {Services} from './Pages/Services';

function App() {
return (
  <React.Fragment>
  <nav className="navbar">
    <Link className="link" to="/">Home</Link>
    <Link className="link" to="projects">Projects</Link>
    <Link className="link" to="blog">Blog</Link>
    <Link className="link" to="contact">Contact</Link>
  </nav>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects/>}>
        <Route path="/services" element={<Services/>} />
        <Route path="/history" element={<CompanyHisotry/>} />
        <Route path="/location" element={<Location/>} />
      </Route>
      <Route path="/blog" element={<Blog/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<Whoops404/>} />
    </Routes>
    </React.Fragment>
)
}

export default App;