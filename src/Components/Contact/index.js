import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const letterClass = useState('text-animate');
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault() 

        emailjs.sendForm('service_7mcl3tg', 'template_pnurdsg', refForm.current, 'dNUd_7cY1mY-N_xCu')
        .then(
            ()=>{
                alert("Message sent successfully");
                window.location.reload(false);
            },
            () => {
                alert('Failed to send message!')
            }
        )

    }

    return(
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters  letterClass = {letterClass}
                        strArray={['C','o','n','t','a', 'c', 't', ' ','M', 'e']} 
                        idx={15}
                    />
                </h1>
                <p>
                    I'm iterested in full-time opportunities-especially ambitious or large 
                    projects. However, if you have other request or question, don't hesitate 
                    to cantact me using below form either.
                </p>

                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}  >
                        <ul>
                            
                            <li className='half'> 
                                <input type="text" name="name" placeholder='Name' required />
                            </li>
                            <li className='half'> 
                                <input type="email" name="email" placeholder='Email' required />
                            </li>
                            <li> 
                                <input type="text" name="subject" placeholder='Subject' required />
                            </li>
                            <li> 
                                <textarea placeholder='Message' name="Message"  required>
                                </textarea>
                            </li>
                            <li> 
                                <input type="submit" className='flat-button' name="submit"/>
                            </li>
                            <input type="hidden" name="to_name" value="Dorisa Shehi"/>
                        </ul>
                    </form>

                </div>
              
            </div>
        </div>


    )
}

export default Contact;