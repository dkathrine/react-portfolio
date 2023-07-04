import React from 'react'
import './styles/main.scss'
import { Navbar, Footer } from '../components/index';
import { TbArrowNarrowRight } from 'react-icons/tb'
import { FaGithub } from 'react-icons/fa'

const ProjectsPage = () => {
    return (
        <div class="background">
            <div class="container">
                <Navbar />
                {/* <!-- main --> */}
                <div id="scroll">
                    {/* <!-- very first card --> */}
                    <div class="card">
                        <a href="https://localtrainer.vercel.app" target="_blank" rel="noreferrer">
                            <TbArrowNarrowRight /> Watch Project
                        </a>

                        <div class="bar">
                            <div class="emptybar"></div>
                            <div class="filledbar"></div>
                        </div>

                        <div class="iframe">
                            <iframe src="https://localtrainer.vercel.app"
                                frameborder="0" title='train-me'></iframe>
                        </div>
                        <a href="https://github.com/TheUnterhemd/FinalProjeckt" target="_blank" rel="noreferrer"><FaGithub /></a>
                    </div>
                    {/* <!-- first card --> */}
                    <div class="card">
                        <a href="https://bobs-burger.vercel.app" target="_blank" rel="noreferrer">
                            <TbArrowNarrowRight /> Watch Project
                        </a>

                        <div class="bar">
                            <div class="emptybar"></div>
                            <div class="filledbar"></div>
                        </div>

                        <div class="iframe">
                            <iframe src="https://bobs-burger.vercel.app"
                                frameborder="0" title='bobs-burger'></iframe>
                        </div>
                        <a href="#" target="_blank" ><FaGithub /></a>
                    </div>
                    {/* <!-- second card --> */}
                    <div class="card">
                        <a href="https://challenge-start-tindog.vercel.app/" target="_blank" rel="noreferrer">
                            <TbArrowNarrowRight /> Watch Project
                        </a>

                        <div class="bar">
                            <div class="emptybar"></div>
                            <div class="filledbar"></div>
                        </div>

                        <div class="iframe">
                            <iframe src="https://challenge-start-tindog.vercel.app/"
                                frameborder="0" title='tindog'></iframe>
                        </div>
                        <a href="https://github.com/dkathrine/Challenge-Start-tindog" target="_blank" rel="noreferrer"><FaGithub /></a>
                    </div>
                    {/* <!-- third card --> */}
                    <div class="card">
                        <a href="https://sweet-spot-omega.vercel.app/" target="_blank" rel="noreferrer">
                            <TbArrowNarrowRight /> Watch Project
                        </a>

                        <div class="bar">
                            <div class="emptybar"></div>
                            <div class="filledbar"></div>
                        </div>

                        <div class="iframe">
                            <iframe src="https://sweet-spot-omega.vercel.app/"
                                frameborder="0" title='sweet-spot'></iframe>
                        </div>
                        <a href="https://github.com/dkathrine/sweet-spot" target="_blank" rel="noreferrer"><FaGithub /></a>
                    </div>
                </div>
                {/* <!-- Footer --> */}
                <Footer />
            </div>
        </div>
    )
}

export default ProjectsPage