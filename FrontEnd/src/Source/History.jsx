import React from 'react';
// Import History CSS
import "../Components/Style/History.css";
// Importing User Header 
import UserHeader from '../Components/Header/UserHeader';
// Importing UserFooter
import UserFooter from '../Components/Footer/UserFooter';

export default function History() {
    // Account info
    const { accountId, currentBalance, lastTranscation, numberOfTransaction } = { accountId: 778645, currentBalance: 8745623, lastTranscation: "7896378998", numberOfTransaction: 54 };

    // History of transaction from user
    const transactionHistory = [
        { transactionID: 101, to: "rahul@paytm", on: "02/01/2026", amount: 1250 },
        { transactionID: 102, to: "neha@ybl", on: "05/01/2026", amount: 499 },
        { transactionID: 103, to: "amit@oksbi", on: "08/01/2026", amount: 3250 },
        { transactionID: 104, to: "priya@ibl", on: "12/01/2026", amount: 780 },
        { transactionID: 105, to: "rohit@paytm", on: "15/01/2026", amount: 5200 },
        { transactionID: 106, to: "sneha@axl", on: "18/01/2026", amount: 1499 },
        { transactionID: 107, to: "vikas@ybl", on: "20/01/2026", amount: 350 },
        { transactionID: 108, to: "anjali@oksbi", on: "22/01/2026", amount: 8750 },
        { transactionID: 109, to: "karan@ibl", on: "25/01/2026", amount: 2150 },
        { transactionID: 110, to: "meera@paytm", on: "28/01/2026", amount: 640 },
        { transactionID: 111, to: "arjun@ybl", on: "01/02/2026", amount: 12000 },
        { transactionID: 112, to: "pooja@oksbi", on: "04/02/2026", amount: 980 },
        { transactionID: 113, to: "nitin@ibl", on: "07/02/2026", amount: 4300 },
        { transactionID: 114, to: "isha@paytm", on: "10/02/2026", amount: 250 },
        { transactionID: 115, to: "deepak@axl", on: "14/02/2026", amount: 6999 },
        { transactionID: 116, to: "simran@ybl", on: "18/02/2026", amount: 1599 },
        { transactionID: 117, to: "manish@oksbi", on: "21/02/2026", amount: 1100 },
        { transactionID: 118, to: "kavya@ibl", on: "25/02/2026", amount: 3890 },
        { transactionID: 119, to: "aditya@paytm", on: "27/02/2026", amount: 720 },
        { transactionID: 120, to: "riya@ybl", on: "01/03/2026", amount: 5400 }
    ];
    return (
        <React.Fragment>
            {/* User Header */}
            <UserHeader />

            {/* Using UserInfoContainer class from Account for account info  */}
            <div className="UserInfoContainer">
                {/* User Container For Profile Pic and Title */}
                <div className="UserInfoUpperContainer">
                    {/* Profile Picture */}
                    <h2 className="userNameLetterElement">H</h2>
                    {/* Title Element */}
                    <h2 className="UserInfoTitle">Account Information</h2>
                </div>

                {/* Container Containing User Info */}
                <div className="UserInfoInnerContainer">
                    {/* Element to display user info */}
                    <h2 className="UserInfoElements">Account ID : {accountId}</h2>
                    <h2 className="UserInfoElements">Current Balance($) : {currentBalance} </h2>
                    <h2 className="UserInfoElements">last Transaction ID : {lastTranscation}</h2>
                    <h2 className="UserInfoElements">Number to Transaction This Month : {numberOfTransaction} </h2>
                </div>
            </div>

            <div className="historyTableContainer">
                {/* Using UserInfoUpperContainer for Title */}
                <div className="UserInfoUpperContainer">
                    {/* Title Element */}
                    <h2 className="UserInfoTitle">Transaction History</h2>
                </div>

                {/* Transaction Table */}
                <div className="transactionTableContainer">
                    <table className='transactionTable' cellPadding={'5px'} cellPadding={'5px'}>
                        <thead>
                            <th>Transaction ID</th>
                            <th>To</th>
                            <th>Date</th>
                            <th>Amount($)</th>
                        </thead>

                        <tbody>
                            {
                                transactionHistory.slice().reverse().map((items, index) => {
                                    return <tr key={index}>
                                        <td>{items.transactionID}</td>
                                        <td>{items.to}</td>
                                        <td>{items.on}</td>
                                        <td>{items.amount}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>


            </div>

            {/* UserFooter */}
            <UserFooter />

        </React.Fragment>
    );
};
