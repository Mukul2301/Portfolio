import React from 'react'
import './skills.css'
import uiDesign from './../../assets/ui-design.png'
import webDesign from './../../assets/website-design.png'
import appDesign from './../../assets/app-design.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>I am skilled and passionate web designer with experience of creating
                visually appealing and user-friendly webstes.
                I have a strong understanding of design and a keen eye for detail.
                I am proficient in HTML, CSS and JavaScript.</span>
            <div className='skillBar'>
                <div className='skillEntry'>
                    <img className='skillBarImg' src={uiDesign} alt='UI design'></img>
                    <div className='skillBarText'>
                        <h2>UI design</h2>
                        <p>Developing innovative UI designs that improves user engagement and streamlines the user experience.</p>
                    </div>
                </div>
            </div>
            <div className='skillBar'>
                <div className='skillEntry'>
                    <img className='skillBarImg' src={webDesign} alt='Web Design'></img>
                    <div className='skillBarText'>
                        <h2>Web Design</h2>
                        <p>Responsible for end-to-end web app development and driving best practice implementation
                            for better user experience.</p>
                    </div>
                </div>
            </div>
            <div className='skillBar'>
                <div className='skillEntry'>
                    <img className='skillBarImg' src={appDesign} alt='App Design'></img>
                    <div className='skillBarText'>
                        <h2>App Design</h2>
                        <p>Familiarity with creation and implementation of app development to deliver the product as per the requirements.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;