import React from 'react';
// Import Account CSS
import "../Components/Style/Account.css";
// Importing UserHeader
import UserHeader from "../Components/Header/UserHeader";
import UserFooter from '../Components/Footer/UserFooter';

export default function Account() {
    // User Name Letter
    const userNameLetter = "H"
    // User Information Variables
    const { userID, userName, userMail, userNumber } = { userID: "684635464", userName: "Harsirat", userMail: "harsiratexample@gmail.com", userNumber: "600xxxxxxx" };
    // UserAccountInfomations
    const { accountNumber, ownerName, currentBalance } = { accountNumber: "4532135412", ownerName: "Harsirat", currentBalance: "5,46,312" };
    return (
        <React.Fragment>
            {/* User Header */}
            <UserHeader />

            {/* User InfoContainer */}
            <div className="UserInfoContainer">
                {/* User Container For Profile Pic and Title */}
                <div className="UserInfoUpperContainer">
                    {/* Profile Picture */}
                    <h2 className="userNameLetterElement">{userNameLetter}</h2>
                    {/* Title Element */}
                    <h2 className="UserInfoTitle">Your Infomation</h2>
                </div>

                {/* Container Containing User Info */}
                <div className="UserInfoInnerContainer">
                    {/* Element to display user info */}
                    <h2 className="UserInfoElements">User ID : {userID}</h2>
                    <h2 className="UserInfoElements">Name : {userName} </h2>
                    <h2 className="UserInfoElements">Mail ID : {userMail}</h2>
                    <h2 className="UserInfoElements">PhoneNumber: {userNumber}</h2>
                </div>
            </div>

            {/* Using same Class name for Account Details Container */}
            <div className="UserInfoContainer">
                {/* Using same class name for Account details Container */}
                <div className="UserInfoUpperContainer">
                    {/* Similary using same class name for element */}
                    <h2 className="UserInfoTitle">Account Details</h2>
                </div>
                {/* Using same className for innerContainer and elements */}
                <div className="UserInfoInnerContainer">
                    {/* Element to display user info */}
                    <h2 className="UserInfoElements">Account Number : {accountNumber}</h2>
                    <h2 className="UserInfoElements">Account Owner : {ownerName}</h2>
                    <h2 className="UserInfoElements">Current Balance($) : {currentBalance}</h2>
                </div>
            </div>

            {/* Following similar structure for Settings */}

            <div className="UserInfoContainer">
                {/* Using same class name for Account details Container */}
                <div className="UserInfoUpperContainer">
                    {/* Similary using same class name for element */}
                    <h2 className="UserInfoTitle">Settings</h2>
                </div>
                {/* Using same className for innerContainer */}
                <div className="UserInfoInnerContainer">
                    <button className="userInfoSettingButtons">Update Profile</button>
                    <button className="userInfoSettingButtons">Change Password</button>
                    <button className="userInfoSettingButtons">Log Out</button>
                </div>
            </div>

            {/* Adding User Footer */}
            <UserFooter />


        </React.Fragment>
    );
};
