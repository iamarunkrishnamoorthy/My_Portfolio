import React from "react";
import my_logo from "/Users/arunkrishnamoorthy/Downloads/My_Portfolio-navbar/src/circle.png";

const About = () => {
    return (

        <div className="container about shadow-lg padding-size  bg-body rounded-corners">
            <div className="row">
                <div className="col-sm ">
                    <img className="my_logo" src={my_logo} alt="My pic"></img>
                </div>
                <div className="col-sm ">
                    <h4>Hi, I’m Arun Krishnamoorthy.</h4>
                    <p>Indian,Engineer, Traveler, Photographer, Cinematographer, Coder. </p>
                    <p>Engaged with Travel, Camera, Technology, Meeting Unknown Peoples. Oueriyacity to learn something.</p>
                    <p>Seeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those who bring out the best in me.</p>
                    <p>Dude don’t get shy come and tell hi to me.</p>
                </div>
            </div>
        </div>
    )
}

export default About
