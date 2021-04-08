import React from "react";
import { FaEnvelope, FaLongArrowAltRight, FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";



const Social = () => {

    function formShow() {
        var x = document.getElementById("contact-us-form");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    function formHide() {
        var x = document.getElementById("contact-us-form");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

  
  
    return (
        <div className="social-wraper container-flex">
            <div className="socail-container" id="social-media-icons">
                <a href="https://m.facebook.com/Arun-Krishnamoorthy-579029802467263/?ref=bookmarks"><FaFacebookSquare className="fb-icon icon" color="white" size="2em" /></a>
                <a href="https://www.instagram.com/iam_arunkrishnamoorthy/"><FaInstagram className="ig-icon icon" color="white" size="2em" /></a>
                <a href="https://www.youtube.com/channel/UC0IRwdKVwLIE1r2wAgZb50g"><FaYoutube className="yt-icon icon" color="white" size="2em" /></a>
            </div>
            <div>
                <IconContext.Provider value={{ size: "3em", color: "#fff" }}>
                    <div className="envelope">
                        <button  onClick={formShow} id="envelope-icon" type="button" class="circle circle-lg circle-default circle-glow"><FaEnvelope /></button>
                    </div>
                </IconContext.Provider>
            </div>
            <div>
                <div  id="contact-us-form" className="form_contact_us shadow-lg  ">
                 <button onClick={formHide} id="cancel-icon" className="cancel-button"> X </button>

                    <h3 className="socail-heading" > Contact Us</h3>
                    <form>
                        <div className="row">
                            <div className="col-sm social-name">
                                <p className="input-title">
                                    Your Name <br></br>
                                    <input className="input-box" type="name" placeholder="Enter your name" size="40"></input>
                                </p>
                            </div>
                            <div className="col-sm">
                                <p className="input-title">
                                    Email <br></br>
                                    <input className="input-box" type="email" placeholder="Enter your email address" size="40"></input>
                                </p>
                            </div>

                        </div>
                        <p className="input-title">
                            Message <br></br>
                            <textarea className="input-box" placeholder="Your message here..." rows="3" cols="90"></textarea>
                        </p>
                        <button type="button" class="btn btn-danger btn-color btn-lg shadow-lg">Submit <FaLongArrowAltRight size="1em" /></button>
                    </form>

                </div>
            </div>

            <div className="socail-container">
                <a href="https://m.facebook.com/Arun-Krishnamoorthy-579029802467263/?ref=bookmarks"><FaFacebookSquare className="fb-icon icon" color="white" size="2em" /></a>
                <a href="https://www.instagram.com/iam_arunkrishnamoorthy/"><FaInstagram className="ig-icon icon" color="white" size="2em" /></a>
                <a href="https://www.youtube.com/channel/UC0IRwdKVwLIE1r2wAgZb50g"><FaYoutube className="yt-icon icon" color="white" size="2em" /></a>
            </div>




        </div>
    )
}

export default Social
