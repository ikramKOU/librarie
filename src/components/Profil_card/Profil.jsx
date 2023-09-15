import { useState } from 'react';
import React from 'react'
import App from '../../App'
import './profil.css'


function Profil() {

    return (

        <>


            <div className="card-container">
                <span className="pro">PRO</span>
                <img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                <h3>Ikram </h3>
                <h6>Morroco</h6>
                <p>User interface designer and <br /> front-end developer</p>
                <div className="buttons">
                    <button className="primary">
                        Message
                    </button>
                    <button className="primary ghost">
                        Following
                    </button>
                </div>
                <div className="skills">
                    <h6>Skills</h6>
                    <ul>
                        <li>UI / UX</li>
                        <li>Front End Development</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node</li>
                    </ul>
                </div>
            </div>




        </>
    );
}

export default Profil;
