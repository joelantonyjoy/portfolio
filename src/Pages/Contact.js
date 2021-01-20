import React, { useState } from 'react';
import {sendEmail as Emailer} from '../Services/email'
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
        <section style={{background:'pink',height:'100vh'}}>
        <div style={{margin:'auto',paddingTop:60,width:'70%'}}>
            <form onSubmit={sendEmail}>
            
                <h1 style={{fontSize:48,fontFamily:'fontLightRegular'}}>Contact me</h1>
                
                <div>
                <label style={{display:'block'}}>Email id</label>
                <input required onChange={setEmail}  type='email'
                    style={{width:400,lineHeight:'32px',fontSize:'16px',margin:'8px 0 16px',paddingLeft:'8px'}}/>
                </div>
                <div>
                <label style={{display:'block'}}>Subject</label>
                <input required onChange={setSubject} type='text'
                    style={{width:400,lineHeight:'32px',fontSize:'16px',margin:'8px 0 16px',paddingLeft:'8px'}}/>
                </div>
                <div>
                <label style={{display:'block'}}>Message</label>
                <textarea required onChange={setMessage} 
                    style={{width:400,height:250,lineHeight:'32px',fontSize:'16px',margin:'8px 0 16px',paddingLeft:'8px'}}/>
                </div>
                <button style={{width:'fit-content',padding:8,border:0,margin:'16px 0',background:'rgb(0,40,100)',color:'rgb(200,230,230)'}}>
                    Send your mail</button>
            </form>
            </div>
        </section>
    );
}