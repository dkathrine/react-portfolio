import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Footer = () => {
    const [isCopied, setIsCopied] = useState(false);


    const handleEmailCopy = () => {
        const email = 'kathrinebeuth@web.de'; // Replace with the actual email
        navigator.clipboard.writeText(email);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1500);
    };

    useEffect(() => {
        let tooltipTimeout;
        if (isCopied) {
            tooltipTimeout = setTimeout(() => {
                setIsCopied(false);
            }, 2000); // Hide tooltip after 2 seconds
        }
        return () => {
            clearTimeout(tooltipTimeout);
        };
    }, [isCopied]);

    return (
        <>
            {/* Footer */}
            <footer className='mt-10'>
                <div>
                    <a href="https://github.com/dkathrine" target='_blank' rel='noreferrer'><FaGithub /></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/kathrine-beuth-39a8b9250/" target='_blank' rel='noreferrer'><FaLinkedin /></a>
                </div>
                <div>
                    <button onClick={handleEmailCopy} title={isCopied ? 'Email copied!' : 'Copy Email'}><HiMail className='text-4xl' /></button>
                </div>
                <div id="totop">
                    <a href="#home">Back to Top</a>
                </div>
            </footer>
        </>
    )
}

export default Footer
