import {Link} from 'react-router-dom'
import img from './developer.jpg'
import styles from "./Home.module.css"
export function Home(){
    return (
        <div className={styles.container}>
            <div className={styles.profile}>

                <h1 className={styles.profile__name}>Joel Antony Joy</h1>
                <h3>Software Engineer / Full Stack Developer</h3>

                <p className={styles.profile__description}>
                    I am a Software Engineer with more than 1.6 years of experience in building responsive dynamic web applications with latest web technologies. 
                    I have strong problem solving capabilities and has been awarded with an Honor Award by my current employer Nissan Digital India.
                </p>

                <Link className={styles.profile__resume}
                to="Resume/Joel_Antony_Joy_Resume.pdf" target="_blank" download aria-label="Download Joel's Resume">
                Download Resume
                </Link>
                <p style={{marginTop:'10vh'}} >
                The website is currently under construction.
                </p>
                <p>Do follow me on other social media for the time being :)</p>
                <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/joel-antony-joy/' aria-label="Joel's Linkedin Profile Link">
                  LinkedIn
                </a>
            </div>
            <div className={styles.img__container}>
                <img className={styles.img__content} alt='dev' src={img}></img>
            </div>
            
        </div>
    );
}