import React from 'react';
import '../styles/Footer.css';
import Map from "./LMap";


const Footer = () => {
    const baseUrl = "http://localhost:5000/api/contact";

    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-left">
                    <h1 className="footer-left-header"><a href="/">LuxWatch.</a></h1>
                    <p className="footer-left-description">Web development project</p>
                    <Map />
                </div>
                <div className="footer-right">

                    <h2 className="footer-right-header">Contact Us</h2>
                    <div className="footer-right-container">
                        <form action={baseUrl} method="POST" className="footer-right-container-form">
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id="firstName" name="firstName" placeholder="Your name..." />

                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" name="lastName" placeholder="Your last name..." />

                            <label htmlFor="occupation">Occupation:</label>
                            <select id="occupation" name="occupation">
                                <option value="student">Student</option>
                                <option value="professor">Professor</option>
                                <option value="other">Other (please specify below)</option>
                            </select>

                            <label htmlFor="subject">Subject:</label>
                            <textarea id="subject" name="subject" placeholder="Write something..."></textarea>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
            <h2>Made with <a href="https://imgur.com/r/cats" target="_blank" rel="noreferrer">❤️</a> by students of EFREI - Paris Panthéon-Assas University  </h2>
            <p>© 2022 Kerim HUDAYBERDIEV, Meryem KÖSE, Jessy VY, Zain ZAFAR</p>
            <p>© All rights belong to their respective owners. We do not own any of this content (images, icons, etc.) </p>
        </footer>
    );
}

export default Footer;