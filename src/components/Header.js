import React, { Component } from 'react';
import Author from '../images/author.jpg';
import ClicketyClack from 'react-clicketyclack';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons/faFacebookSquare";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faMedium } from "@fortawesome/free-brands-svg-icons/faMedium";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons/faTelegramPlane";

export default class Header extends Component {

    render() {
        const lines = [
            'a Computer Engineer',
            'studying at Erciyes University'
        ];

        return (
            <header>
                <div className="container">
                    <img id="profile-image" className="profile-img" src={Author} alt="Veli Yavuz" />
                    <h1>Veli Yavuz Göçeren</h1>
                    <hr /><br />
                    <h2>
                        I'm <ClicketyClack lines={lines} />
                    </h2>
                    <br/><br/>
                    <div className="ana-div">
                        <div className="icon-div1">
                        <a className="icons" target="_blank" href="https://facebook.com/VYGoceren"  rel="noopener noreferrer"><FontAwesomeIcon className="social-icons" size="3x" icon={faFacebookSquare} /></a>
                        <a className="icons" target="_blank" href="https://instagram.com/vygoceren" rel="noopener noreferrer"><FontAwesomeIcon className="social-icons" size="3x" icon={faInstagram} /></a>
                        <a className="icons" target="_blank" href="https://twitter.com/VYGoceren" rel="noopener noreferrer"><FontAwesomeIcon className="social-icons" size="3x" icon={faTwitter} /></a>
                        <a className="icons" target="_blank" href="https://medium.com/@vygoceren" rel="noopener noreferrer"><FontAwesomeIcon className="social-icons" size="3x" icon={faMedium} /></a>
                        </div>
                        <div className="icon-div2">
                        <a className="icons" target="_blank" href="https://www.linkedin.com/in/veli-yavuz-g%C3%B6%C3%A7eren-12806818b/" rel="noopener noreferrer"><FontAwesomeIcon className="social-icons" size="3x" icon={faLinkedin} /></a>
                        <a className="icons" target="_blank" href="https://github.com/goceren" rel="noopener noreferrer"> <FontAwesomeIcon className="social-icons" size="3x" icon={faGithub} /></a>
                        <a className="icons" target="_blank" href="mailto:vgoceren@gmail.com" rel="noopener noreferrer"><FontAwesomeIcon className="social-icons" size="3x" icon={faTelegramPlane} /></a>
                        </div>
                        
                    </div>

                </div>
            </header>
        )
    }
}
