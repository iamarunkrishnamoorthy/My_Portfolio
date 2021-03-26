import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Content Creater and Web Developer</h1>
                <Typed 
                    className="typed-text"
                    strings={["General Info", "Photography", "videography", "Web Developer", "Editing"]}
                    typeSpeed= {40}
                    typeback= {60}
                    loop
                />
                <a href="#" className="btn-main-offer btn btn-warning">Contact Me</a>
            </div>
        </div>
    )
}

export default Header


