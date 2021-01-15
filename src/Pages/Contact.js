import React, { useState } from 'react';
import {sendEmail as Emailer} from '../Services/email'
export function Contact(){
    const style = {
        display:'grid',
        alignItems:'center'
    }
    
    const [email,setEmail] = useState(null);
    const [subject,setSubject] = useState(null);
    const [message,setMessage] = useState(null);

    function sendEmail(e){
        e.preventDefault();
        Emailer(subject.target.value,email.target.value,message.target.value);
        console.log(email.target.value,subject.target.value,message.target.value);
    }

    return (
        <section style={{background:'pink'}}>
        <div style={{margin:'auto',paddingTop:60,width:'70%'}}>
            <form onSubmit={sendEmail} style={style}>
            <h1 style={{fontSize:48,fontFamily:'fontLightRegular'}}>Contact me</h1>
                <label>Email id</label>
                <input onChange={setEmail} style={{width:400,lineHeight:'32px',fontSize:'16px',margin:'8px 0 16px',paddingLeft:'8px'}} type='email'/>
                <label>Subject</label>
                <input onChange={setSubject} style={{width:400,lineHeight:'32px',fontSize:'16px',margin:'8px 0 16px',paddingLeft:'8px'}} type='text'/>
                <label>Message</label>
                <textarea onChange={setMessage} style={{width:400,height:250,lineHeight:'32px',fontSize:'16px',margin:'8px 0 16px',paddingLeft:'8px'}}/>
                <button style={{width:200,margin:'16px 0',background:'green',color:'white'}}>Send your mail</button>
            </form>
            </div>
        </section>
    );
}