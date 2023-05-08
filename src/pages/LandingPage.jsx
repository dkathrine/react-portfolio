import React from 'react'
import 'animate.css'
import './styles/style.scss'

const LandingPage = () => {
    return (
        <div id='landing' className='background'>
            <main>
                {/* linking */}
                <a href="./main">
                    {/*  Content  */}
                    <div class="sign">
                        <p>Hi, my name is</p>
                        <h1>Kathrine</h1>
                        <p> - I'm a Full Stack Web Developer</p>
                    </div>
                </a>
            </main>
        </div >
    )
}

export default LandingPage