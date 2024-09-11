import React from 'react';
import './stylepages/about.css';
import logo from './stylepages/mylogo.png';

export default function About() {
    return ( 
        <section class="home" id="home">
            <div class="home-content">
                <h3>Hi! Im Developer for this Webpage</h3>
                <h1>Aldrean Ponsoy</h1>
                <h3>Explore my<span class="text"></span></h3>
                <button class="btn">Download CV</button>
                <div class="social-media-icon">
                    <a href="https://github.com/Leo211990" target="_blank"><i class='bx bxl-github' ></i></a>
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