import emailjs from 'emailjs-com';
import { init} from 'emailjs-com';

export function sendEmail(subject,email,message){
    init("user_wSm3Aga9FWieerqW7LHk2");
        emailjs.send("gmail_joel","template_rl6kvqo",{
            email_subject: subject,
            from_name: email,
            message: message,
            }).then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
             }, function(error) {
                console.log('FAILED...', error);
             });
}