import React from 'react'
import './MainContent.css'
import Github from './assets/github.svg'
import LinkedIn from './assets/linkedin.svg'
import Me from './assets/me.png'
import Mail from './assets/Mail.svg'

export default function MainContent() {
    return (
        <>
            <div className='container'>
                <div className='img-container'>
                    <img src={Me} alt='' className='main-img' />
                </div>
                <div className='sub-container'>
                    <h2 className='name'>Javier Ibanez</h2>
                    <h3 className='role'>Software Engineer</h3>
                    <a className='web' href='https://ibanez92.github.io/Responsive_Portfolio/'>⚡My Portfolio Website⚡</a>
                    <div className='connect'>
                        <a href="mailto:JavierIbanez92@outlook.com" className='mail'><img src={Mail} alt="" />Email</a>
                        <a href='https://www.linkedin.com/in/ibanez92/' className='linkedin'><img src={LinkedIn} alt="" />LinkedIn</a>
                    </div>
                    <div className='about'>
                        <h3>About:</h3>
                        <p>I am an aspiring full-stack developer. I am constantly learning and adopting new technologies and knowledge related to my future career.</p>
                    </div>
                    <div className='interest'>
                        <h3>Interests:</h3>
                        <p>Family. Technology. Music. Sports. Health. I love connecting with new people. Give me a shout at JavierIbanez92@outlook.com</p>
                    </div>
                </div>
                <div className='footer'>
                    <a href='https://github.com/Ibanez92'><img className='github' src={Github} alt='github-logo'/></a>
                    <a href='https://www.linkedin.com/in/ibanez92/'><img className='linkedin-footer' src={LinkedIn} alt='linkedin-logo'/></a>
                </div>
            </div>
        </>
    )
}
