import React from 'react'
import './intro.css'
import bg from '../../assets/designhq.png'
import hireme from '../../assets/hireme.png'
import { Link } from 'react-scroll'



const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Mukul  <br /></span>FullStack Developer <br /></span>
                <p className='IntroPara'>I am a skilled Full-stack developer with experience in front-end development <br /> & creating visual appealing and user friendly websites.</p>
                <Link className='hirelink'><button onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }} className='hireMeBtn'><img className='hireMeImg' src={hireme} alt='Hire Me' ></img>Hire Me</button></Link>
            </div>
            <img className='bg' src={bg} alt=''></img>
        </section>
    )
}

export default Intro