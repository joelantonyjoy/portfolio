import {Link} from 'react-router-dom'
import insta from '../../assets/images/instagram-logo.svg'
import linkedin from '../../assets/images/linkedin-logo.svg'
import github from '../../assets/images/github-logo.svg'
import styles from "./Home.module.css"
export function Home(){
    // let roles = ['Software Engineer','Full Stack Developer','UX Enthusiast','Minimalist','Problem Solver'];
    // const [currentRole,setCurrentRole] = useState('');
    // let i = 0;
    // function setRole(){
    //     setCurrentRole(roles[i++]);
    //     i = i % roles.length;
    // }
    // setInterval(setRole,3000);
    return (
        <div className={styles.container}>
            <div className={styles.profile}>

                <h1 className={styles.profile__name}>Joel Antony Joy</h1>
                <h3 className={styles.profile__role}>Software Engineer / Full Stack Developer</h3>
 
                {/* <p className={styles.profile__description}>
                    I am a Software Engineer with more than 1.6 years of experience in building responsive dynamic web applications with latest web technologies. 
                    I have strong problem solving capabilities and has been awarded with an Honor Award by my current employer Nissan Digital India.
                </p> */}
                <Link className={styles.profile__resume}
                to="Resume/Joel_Antony_Joy_Resume.pdf" target="_blank" download aria-label="Download Joel's Resume">
                    Download Resume
                </Link>
                <a className={styles.profile__hireme} 
                href='mailto:joelantonyjoy@gmail.com?Subject=Software Engineer opportunity at [ Your company ]&body=Hi Joel,%0d%0a%0d%0aHope you are doing well &#128522;%0d%0a%0d%0aI would like to schedule a meeting to discuss opportunities at [ Your Company ] for the role of Software Engineer.
                %0d%0a%0d%0aRegards,
                %0d%0a[ Your good name ]
                '>
                    Hire Me
                </a>
                {/* <p style={{marginTop:'10vh'}} >
                The website is currently under construction.
                </p>
                <p>Do follow me on other social media for the time being :)</p>
                <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/joel-antony-joy/' aria-label="Joel's Linkedin Profile Link">
                  LinkedIn
                </a> */}
            </div>
            <div className={styles.social_media}>
                <a href='https://www.instagram.com/i.joel_antony_joy' rel="noreferrer" target='_blank'><img alt='insta' src={insta}></img></a>
                <a href='https://www.linkedin.com/in/joel-antony-joy' rel="noreferrer" target='_blank'><img alt='linkedin' src={linkedin}></img></a>
                <a href='https://github.com/joelantonyjoy' rel="noreferrer" target='_blank'><img alt='github' src={github}></img></a>
            </div>
        </div>
    );
}