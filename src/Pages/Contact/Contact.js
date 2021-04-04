import React, { useState } from 'react';
import styles from './Contact.module.css'
import {sendEmail as Emailer} from '../../services/EmailService'
export function Contact(){
    
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();
        Emailer(subject,email,message);
        console.log(email,subject,message);
        setEmail('');
        setMessage('');
        setSubject('');
        document.getElementsByTagName("input")[0].value='';
        document.getElementsByTagName("input")[1].value='';
        document.getElementsByTagName("textarea")[0].value='';
        alert("Thanks for your reply! :)")
    }

    return (
        <section className={styles.container}>
            <form className={styles.form} onSubmit={sendEmail}>

                <h1 className={styles.form__header}>Contact me</h1>

                <div>
                <label className={styles.form__label} >Email id</label>
                <input className={styles.form__input} required onChange={(e)=>{setEmail(e.target.value)}} value={email} type='email'/>
                </div>

                <div>
                <label className={styles.form__label} >Subject</label>
                <input className={styles.form__input}  required onChange={(e)=>{setSubject(e.target.value)}} value={subject} type='text'/>
                </div>

                <div>
                <label className={styles.form__label} >Message</label>
                <textarea className={[styles.form__input,styles.form__textarea].join(' ')} required onChange={(e)=>{setMessage(e.target.value)}} value={message}/>
                </div>

                <button className={styles.form__button}>
                    Send your mail</button>
            </form>
        </section>
    );
}