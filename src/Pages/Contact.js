import React, { useState } from 'react';
import {sendEmail as Emailer} from '../services/EmailService'
export function Contact(){
    
    const [email,setEmail] = useState(null);
    const [subject,setSubject] = useState(null);
    const [message,setMessage] = useState(null);

    function sendEmail(e){
        e.preventDefault();
        Emailer(subject.target.value,email.target.value,message.target.value);
        console.log(email.target.value,subject.target.value,message.target.value);
    }

    return (
        <section>
        <div style={{margin:'auto',paddingTop:2,width:'30%', minWidth:280}}>
            <form onSubmit={sendEmail}>
                <h1 style={{fontSize:42,fontFamily:'fontLightRegular'}}>Contact me</h1>
                <div>
                <label style={{display:'block'}}>Email id</label>
                <input required onChange={setEmail}  type='email'
                    style={{width:'100%',lineHeight:'32px',fontSize:'14px',margin:'8px 0 16px',paddingLeft:'8px',letterSpacing:'0.8px'}}/>
                </div>
                <div>
                <label style={{display:'block'}}>Subject</label>
                <input required onChange={setSubject} type='text'
                    style={{width:'100%',lineHeight:'32px',fontSize:'14px',margin:'8px 0 16px',paddingLeft:'8px',letterSpacing:'0.8px'}}/>
                </div>
                <div>
                <label style={{display:'block'}}>Message</label>
                <textarea required onChange={setMessage} 
                    style={{fontFamily:'fontMediumRegular',width:'100%',height:200,lineHeight:'32px',letterSpacing:'0.8px',fontSize:'14px',margin:'8px 0 16px',paddingLeft:'8px'}}/>
                </div>
                <button style={{width:'fit-content',padding:'8px 16px',background:'white',margin:'auto',color:'black',fontFamily:'fontMediumRegular',border:'1px solid black'}}>
                    Send your mail</button>
            </form>
            </div>
        </section>
    );
}