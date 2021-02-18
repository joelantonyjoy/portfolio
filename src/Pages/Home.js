import {Link} from 'react-router-dom'
import img from '../Pages/developer.jpg'
export function Home(){
    return (
        <div style={{padding:8,paddingTop:'6vh',minWidth:288,margin:'auto',width:'85%',display:'flex'}}>
            <div style={{width:'50%',minWidth:'288px'}}>
                <h1 style={{color:'red'}}>Joel Antony Joy</h1>
                <h3>Software Engineer / Full Stack Developer</h3>
                <p style={{width:'70%',minWidth:'288px',lineHeight:'24px',margin:'32px 0'}}>I am a Software Engineer with more than 1.6 years of experience in building responsive dynamic web applications with latest web technologies. 
                I have strong problem solving capabilities and has been awarded with an Honor Award by my current employer Nissan Digital India.</p>
                <Link style={{textDecoration:'none',border:'1px solid lightgreen',padding:8,color:'black',
                cursor:'pointer'}} 
                to="Resume/Joel_Antony_Joy_Resume.pdf" target="_blank" download aria-label="Download Joel's Resume">
                Download Resume
                </Link>
                <p style={{marginTop:'10vh'}} >The website is currently under construction.</p>
                <p>Do follow me on <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/joel-antony-joy/' aria-label="Joel's Linkedin Profile Link">LinkedIn</a> for the time being :)</p>
            </div>
            <div style={{width:'50%'}}>
                <img style={{width:'100%'}} alt='dev' src={img}></img>
            </div>
        </div>
    );
}