import React, { useRef } from 'react'
import nodeLogo from '../../assets/nodeLogo.png'
import react from '../../assets/react-symbol.png'
import gitLogo from '../../assets/git-logo.png'
import nestLogo from '../../assets/nestJS.png'
import jsIcon from '../../assets/all.png'
import sql from '../../assets/sql.png'
import pythonLogo from '../../assets/pythonLogo.png'
import graphQL from '../../assets/graphQL.png'
import githubIcon from '../../assets/github-logo.png'
import InstaIcon from '../../assets/instagram.png'
import xIcon from '../../assets/x-icon.png'
import linkedInIcon from '../../assets/linkedin.png'
import './contact.css'
import emailjs from '@emailjs/browser';
import hireme from '../../assets/cvImg.png'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qlvrj4m', 'template_2q7hgq8', form.current, 'uYmcU0wgQo7T3usx8')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
                alert("Email Sent")
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contactsPage'>
            <div id='techStack'>
                <h2 className='contactTitle'>Tech Stack</h2>
                <p className='clientDesc'> Incorporates 2+ years as a
                    Full Stack Developer with hands-on experience on designing, developing,
                    and implementing applications and solutions using a range of technologies and familiarity with various languages and tools.
                </p>
                <div className='skillImgs1'>
                    <img className='skillImg' src={react} alt='skills'></img>
                    <img className='skillImg' src={nestLogo} alt='skills'></img>
                    <img className='skillImg' src={graphQL} alt='skills'></img>
                    <img className='skillImg' src={jsIcon} alt='skills'></img>
                </div>
                <div className='skillImgs2'>
                    <img className='skillImg' src={nodeLogo} alt='skills'></img>
                    <img className='skillImg' src={pythonLogo} alt='skills'></img>
                    <img className='skillImg' src={sql} alt='skills'></img>
                    <img className='skillImg' src={gitLogo} alt='skills'></img>
                </div>
                <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1BHXiQmV2Y3jZidGY2jQbACLsvLAdyYV5/view?usp=drive_link'><button className='cvBtn'><img className='cvImg' src={hireme} alt='CV' ></img>CV Download</button></a>

            </div>
            <div id='contact'>
                <h1 className='contactTitle'>Contact</h1>
                <span className='contactDesc'>Contact me via email for more Info</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input className='name' type='text' placeholder='Your name' name='from_name' required ></input>
                    <input className='email' type='email' placeholder='Your Email' name='from_email' required></input>
                    <textarea className='message' placeholder='Your message' rows={4} ></textarea>
                    <button className='submitBtn' type='submit' value="Send">Send</button>
                    <div className='links'>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mukul-shende/">
                            <img className='socials' src={linkedInIcon} alt='LinkedIn'></img> </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/mukul_shende/">
                            <img className='socials' src={InstaIcon} alt='Instagram'></img>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/MukulShende3">
                            <img className='socials' src={xIcon} alt='Twitter'></img>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/Mukul2301">
                            <img className='socials' src={githubIcon} alt='facebook'></img>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact