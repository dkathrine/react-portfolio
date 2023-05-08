import { useState, useEffect } from 'react'
import '../pages/styles/projects.scss'

const Navbar = ({ isMain }) => {
    const [isMainPageRendered, setIsMainPageRendered] = useState(false);


    useEffect(() => {
        setIsMainPageRendered(isMain);
    }, [isMain]);
    return (
        <>
            {/* header */}
            <div id="home"></div>
            <header>
                <nav id="navDesktop">
                    {
                        isMainPageRendered ? (
                            <>
                                <div>
                                    <a href="#skills">Skills</a>
                                </div>
                            </>) : (
                            <div>
                                <a href="./main">Main</a>
                            </div>
                        )
                    }
                    <div>
                        <a href="./projects">Projects</a>
                    </div>
                    <div>
                        <a href="./">Back to Landing</a>
                    </div>
                </nav>
                <details id="dropdown">
                    <summary></summary>
                    <nav>
                        {
                            isMainPageRendered ? (
                                <>
                                    <div>
                                        <a href="#skills">Skills</a>
                                    </div>
                                </>) : (
                                <div>
                                    <a href="./main">Main</a>
                                </div>
                            )
                        }
                        <div>
                            <a href="./projects">Projects</a>
                        </div>
                        <div>
                            <a href="./">Back to Landing</a>
                        </div>
                    </nav>
                </details>
            </header>
        </>
    )
}

export default Navbar