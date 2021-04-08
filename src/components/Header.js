import React from "react";
import Typed from "react-typed";
import { FaPhoneAlt } from "react-icons/fa";
import { IconContext } from "react-icons";



const Header = () => {
    return (
        <IconContext.Provider value={{ color: "black", size: "1em"}}>
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
                <a href="#" className="btn-main-offer btn btn-warning">Contact Me <FaPhoneAlt /> </a>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Header


