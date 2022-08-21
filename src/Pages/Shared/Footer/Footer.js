import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <div class="footer-title">
                    <h1>Ed-Tech Ltd</h1>
                </div>
                <div class="copyright">
                    <p>
                        Copyright © 2022 Ed-Tech Ltd
                        <br />
                        All rights reserved
                    </p>
                </div>
                <div class="social-media">
                    <a class="social" target="_blank" href="https://www.facebook.com/ar.burhan.560"><i
                        class="fab fa-facebook-f"></i></a>
                    <a class="social" target="_blank" href="https://www.linkedin.com/in/burhan128454/"><i
                        class="fab fa-linkedin-in"></i></a>
                    <a class="social" target="_blank" href="https://twitter.com/Burhan190629"><i class="fab fa-twitter"></i>
                    </a>
                    <a class="social" target="_blank" href="https://dribbble.com/arburhan"><i
                        class="fab fa-dribbble-square"></i> </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;