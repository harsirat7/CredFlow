import React from 'react';
// Importing UserHeader
import UserHeader from '../Components/Header/UserHeader';
// Import CSS for UserHomePage
import "../Components/Style/UserHomePage.css";


export default function UserHomePage() {
    // Servies Name and Images
    const ServicesName = ["Secure Money Transfer", "Account Management", "Transaction History", "Saving Goals"];
    const ServiveImages = ["Transfer.jpg", "Management.jpg", "AccountHistory.jpg", "SavingGoals.jpg"];
    return (
        <React.Fragment>
            {/* User Header */}
            <UserHeader />

            {/* About Us Content Section */}
            <div className="HomePageAboutMainContainer">
                <img src="/BankImage.jpg" alt="" className='HomePageAboutSectionImage' />

                <div className="HomePageAboutContentContainer">
                    <h2 className="HomePageAboutTitle">Who are We ?</h2>

                    <p className='HomePageAboutContent'>CredFlow is a modern digital banking platform designed to make managing your finances simple, secure, and efficient. Our mission is to provide users with a seamless experience for transferring money, tracking transaction history, and managing their accounts from anywhere, at any time. With a strong focus on security, transparency, and user satisfaction, CredFlow empowers individuals to take control of their financial journey through innovative technology and reliable banking solutions.</p>

                    <p className="HomePageAboutContent"> At CredFlow, we believe banking should be simple, fast, and secure. Our platform enables users to manage accounts, transfer money instantly, and monitor transaction history with ease. By combining cutting-edge technology with strong security measures, we strive to deliver a trusted and hassle-free digital banking experience.</p>

                    <p className="HomePageAboutContent">As technology continues to evolve, so do we. CredFlow embraces innovation to deliver faster services, smarter financial management tools, and a better overall banking experience. Our vision is to become a trusted digital financial companion that supports users in achieving their personal and financial goals while maintaining the highest standards of security and reliability.</p>

                </div>

            </div>


            <div className="HomePageServiceSection">
                <h2 className="HomePageServiceTitle">Services</h2>

                <div className="HomePageServiecesMainContainer">
                    {
                        ServiveImages.map((ImageName, index) => {
                            return <div className="HomePageServiceContainers" key={index}>
                                <img src={ImageName} alt="" className='UserHomeServiceImages' />
                                <h2 className="UserHomePageServiceNames">{ServicesName[index]}</h2>
                            </div>
                        })
                    }
                </div>

            </div>



        </React.Fragment>
    );
};


