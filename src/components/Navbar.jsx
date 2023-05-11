import { useState, useEffect } from 'react'
import '../pages/styles/projects.scss'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = ({ isMain }) => {
    const [isMainPageRendered, setIsMainPageRendered] = useState(false);
    const [open, setOpen] = useState(false);


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

                <div style={{ display: "flex", flexDirection: "column" }}>

                    <GiHamburgerMenu id='dropdown' onClick={() => setOpen(prev => !prev)} style={{ fontSize: "25px", alignSelf: "center" }} />

                    <nav style={open ? { "display": "block" } : { "display": "none" }} >
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
                </div>

            </header>
        </>
    )
}

export default Navbar