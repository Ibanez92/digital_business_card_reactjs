import React from 'react'
import './MainContent.css'
// import me from './assets/me.png'

export default function MainContent() {
    return (
        <>
            <div className='container'>
                <div className='img-container'>
                    <img src='' alt='' className='main-img' />
                </div>
                <div className='sub-container'>
                    <h2 className='name'>Javier Ibanez</h2>
                    <h3 className='role'>Full-Stack Developer</h3>
                    <h5 className='web'>mywebsite.com</h5>
                    <div className='connect'>
                        <a href="" className='mail'>Email</a>
                        <a href='https://www.linkedin.com/in/ibanez92/' className='linkedin'>LinkedIn</a>
                    </div>
                    <div className='about'>
                        <h3>About</h3>
                        <p>I am an aspiring full-stack developer. I am constantly learning and adopting new technologies and knowledge related to my future career.</p>
                    </div>
                    <div className='interest'>
                        <h3>Interests</h3>
                        <p>Family. Technology. Music. Sports. Health. I love connecting with new people. Give me a shout at JavierIbanez92@outlook.com</p>
                    </div>
                </div>
                <div className='footer'>
                    <a href='https://github.com/Ibanez92'><img src='' alt='github-logo'/></a>
                    <a href='https://www.linkedin.com/in/ibanez92/'><img src='' alt='linkedin-logo'/></a>
                </div>
            </div>
        </>
    )
}
