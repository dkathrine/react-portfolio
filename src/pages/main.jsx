import React from 'react'
import './styles/main.scss'
import Bewerbungsfoto from '../assets/Bewerbungsfoto.jpg';
import { Navbar, Skills, Footer } from '../components/index';

const main = () => {

    return (
        <>
            <div className='background'>
                <div className="container">
                    <Navbar isMain={true} />
                    {/* main */}
                    <main>
                        {/* about me */}
                        <div id="aboutme">
                            <img src={Bewerbungsfoto} alt="Foto_Kathrine" className="foto" />
                            <p id="main-txt">
                                Hello, I'm a passionate Full Stack Web Developer!
                                <br />
                                I love coding and I am always eager to learn more about it.
                                <br />
                                If you are in need of help with a project,
                                <br />
                                please reach out to me.
                            </p>
                        </div>
                        <Skills />
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default main