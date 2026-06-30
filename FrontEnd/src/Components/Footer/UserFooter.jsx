import React from 'react';
// Import CSS for UserFooter
import "../Style/UserFooter.css";
import { Link } from 'react-router-dom';

export default function UserFooter() {
    return (
        <div className='UserFooterMainContainer'>
            <h2 className="UserFooterLogoElement"><i>CredFlow</i></h2>

            <div className="UserFooterLinksContainer">
                <h2 className="UserFooterLinksTitle">Links</h2>
                <ul className="UserFooterLinksList">
                    <li className="UserFooterLinksElements"><Link to="/">Home</Link></li>
                    <li className="UserFooterLinksElements"><Link to="/account">Your Account</Link></li>
                    <li className="UserFooterLinksElements"><Link to="/accountHistory">History</Link></li>
                    <li className="UserFooterLinksElements"><Link to="/manageAssets">Manage Assets</Link></li>
                </ul>
            </div>

            <div className="UserFooterContentContainer">
                {/* Using Same Class Name for contact Title */}
                <h2 className="UserFooterLinksTitle">Contact Us</h2>
                {/* Using Same Code and ClassName For Contact Us Elements */}
                <ul className="UserFooterLinksList">
                    <li className="UserFooterLinksElements"><i className="bi bi-telephone-fill"> +91 700xxxxxxx</i></li>
                    <li className="UserFooterLinksElements"><i className="bi bi-telephone-fill"> +91 900xxxxxxx</i></li>
                    <li className="UserFooterLinksElements"><i className="bi bi-envelope"> credflow@gmail.com</i></li>
                    <li className="UserFooterLinksElements"><i className="bi bi-linkedin"> CredFlow</i></li>
                </ul>
            </div>

        </div>
    );
};
