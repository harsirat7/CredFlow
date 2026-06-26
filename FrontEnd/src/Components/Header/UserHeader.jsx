import React from 'react';
// Importing CSS for Header
import "../Style/UserHeader.css";
// Importing Link for UserHeaderLinksElements
import { Link } from 'react-router-dom';

export default function UserHeader() {
    return (
        <div className='UserHeaderMainContainer'>
            {/* Logo Element */}
            <h1 className='UserHeaderLogoElement'><i>CredFlow</i></h1>

            {/* NavBar Routing Links */}
            <div className="UserHeaderLinksContainer">
                <ul className="UserHeaderLinksList">
                    <li className="UserHeaderLinksElements"><Link to="/">Home</Link></li>
                    <li className="UserHeaderLinksElements"><Link to="/account">Your Account</Link></li>
                    <li className="UserHeaderLinksElements"><Link to="/history">History</Link></li>
                    <li className="UserHeaderLinksElements"><Link to="/transferMoney">Transfer Money</Link></li>
                </ul>
            </div>

        </div>
    );
};
