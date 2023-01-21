import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <>
            <footer>
                <hr/><hr/>
                <p id="footText">&copy; Developer Funnel</p>
                <div id="footMain">
                    <div className="footDiv">
                        <p>Contact Us</p>
                        <p>About Us</p>
                    </div>
                    <div className="footDiv">
                        <p>Contact Us</p>
                        <p>About Us</p>
                    </div>
                    <div className="footDiv noBorder">
                        <p>Contact Us</p>
                        <p>About Us</p>
                    </div>
                </div>
                <hr/>
                <div className="social">
                    <a href="www.facebook.com" target="_blank">
                        <img src="https://i.ibb.co/wyH9JxS/facebook.png" alt="fb" className="socialIcon"/>
                    </a>
                    <a href="www.facebook.com" target="_blank">
                        <img src="https://i.ibb.co/w0kZ5Hf/insta.png" alt="fb" className="socialIcon"/>
                    </a>
                    <a href="www.facebook.com" target="_blank">
                        <img src="https://i.ibb.co/wyH9JxS/facebook.png" alt="fb" className="socialIcon"/>
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Footer