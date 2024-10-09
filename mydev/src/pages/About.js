import React, { useEffect } from 'react';
import './stylepages/about.css';
import logo from './stylepages/mylogo.png';
import { FaGithub } from 'react-icons/fa';
import Typed from 'typed.js'; // Import Typed.js

export default function About() {
    useEffect(() => {
        // Initialize Typed.js
        const options = {
            strings: ["Explore my website"],
            typeSpeed: 90,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,         
        };
        const typed = new Typed(".text", options);

        // Cleanup on unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return ( 
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hi! I'm Developer for this Webpage</h3>
                <h1>Aldrean Ponsoy</h1>
                <h3><span className="text"></span></h3>
                <a className="btn" href="CV_PONSOY.PDF" download="CV_PONSOY.PDF">Download CV</a>
                <div className="social-media-icon">
                    <a href="https://github.com/AldreanPonsoy" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} color="#000" />
                    </a>
                </div>
            </div>    
            <div>
                <div className="home-img">
                    <img src={logo} alt="My Image" />
                </div>
            </div>
        </section>    
    );
}
