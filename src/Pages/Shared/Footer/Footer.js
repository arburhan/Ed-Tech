import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-title">
                    <h1>Ed-Tech Ltd</h1>
                </div>
                <div className="copyright">
                    <p>
                        Copyright © 2022 Ed-Tech Ltd
                        <br />
                        All rights reserved
                    </p>
                </div>
                <div className="social-media">
                    <a className="social" target="_blank" href="https://www.facebook.com/ar.burhan.560"><i
                        className="fab fa-facebook-f"></i></a>
                    <a className="social" target="_blank" href="https://www.linkedin.com/in/burhan128454/"><i
                        className="fab fa-linkedin-in"></i></a>
                    <a className="social" target="_blank" href="https://twitter.com/Burhan190629"><i className="fab fa-twitter"></i>
                    </a>
                    <a className="social" target="_blank" href="https://dribbble.com/arburhan"><i
                        className="fab fa-dribbble-square"></i> </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;