import React, { useEffect } from 'react';
import './stylepages/about.css';
import logo from './stylepages/mylogo.png';
import { FaGithub } from 'react-icons/fa';


export default function About() {

    return ( 
        <section class="home" id="home">
            <div class="home-content">
                <h3>Hi! Im Developer for this Webpage</h3>
                <h1>Aldrean Ponsoy</h1>
                <h3>Explore my<span class="text" ></span></h3>
                <button class="btn" href="CV_PONSOY.PDF" download="CV_PONSOY.PDF">Download CV</button>
                <div class="social-media-icon">
                    <a href="https://github.com/AldreanPonsoy" target="_blank"><FaGithub size={30} color="#000" /></a>
                </div>
            </div>    
            <div>
                <div class="home-img">
                    <img src={logo} alt="My Image"></img>
                </div>
            </div>
        </section>    
    )
}