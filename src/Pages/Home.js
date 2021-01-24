import {Link} from 'react-router-dom'
export function Home(){
    return (
        <div style={{margin:'auto',width:'fit-content',padding:8,marginTop:'10vh'}}>
            <h1>Welcome</h1>
            <h1 style={{color:'red'}}>Joel Antony Joy</h1>
            <h3 style={{marginBottom:'32px'}}>Full Stack Developer / Software Engineer</h3>
            <Link style={{textDecoration:'none',border:'1px solid lightgreen',padding:8,color:'black',
            cursor:'pointer'}} 
            to="Resume/Joel_Antony_Joy_Resume.pdf" target="_blank" download>
            Download Resume
            </Link>
            <p style={{marginTop:'10vh'}} >The website is currently under construction.</p>
            <p>Do follow me on <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/joel-antony-joy/'>LinkedIn</a> for the time being :)</p>
        </div>
    );
}