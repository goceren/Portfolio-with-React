import React, { Component } from 'react';
import AboutProfile from '../images/about.jpg';

export default class About extends Component {
    render() {
        return (
            <section id="about">
                <h2>About Me</h2>

                <hr className="star-light" /><br /><br />

                <div id="about-text" className="clearfix">

                    <div className="left">
                    <img id="profile-image" className="img-fluid" src={AboutProfile} alt="Veli Yavuz" />
                    </div>
                    <div className="right">
                        <br/><br/><br/><br/><br/>
                        <p className="text">
                        If I need to talk about myself briefly, I live in Kayseri because of my school.  I have been studying Computer Engineering at Erciyes University since 2016.  I finished high school in Karaman Anatolian High School. I had no idea before about the computer and the software. Just when I was child, they asked "What do you want to be when you grow up?"  I would say I want to be a Computer Engineer.  I try to improve myself by following courses, researching and doing projects myself.
                    </p>
                    </div>

                </div>

                
            </section>
        )
    }
}
