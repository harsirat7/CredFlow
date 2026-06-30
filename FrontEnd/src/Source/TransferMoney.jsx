import React, { useState } from 'react';
// Importing TransferMoney CSS
import "../Components/Style/TransferMoney.css";
// Importing UserHeader
import UserHeader from '../Components/Header/UserHeader';
// Importing UserFooter
import UserFooter from "../Components/Footer/UserFooter";


export default function TransferMoney() {
    // User Balance
    const userBalance = 56456;
    const [result, setResult] = useState("");
    return (
        <React.Fragment>
            {/* User Header */}
            <UserHeader />

            {/* Money Transfer Main Component */}
            <div className="transferMainComponent">
                {/* User Balance Element */}
                <h2 className="balanceElement">Current Balance($) : {userBalance}</h2>
                {/* Money Transfer Form Container */}
                <div className="transferFormContainer">
                    <form className="moneyTransferForm" id='transferMoney'>
                        <div className="trasnferFormLabelsContainer">
                            <label htmlFor="to" className="transferFormLabels">To</label>
                            <label htmlFor="amount" className="transferFormLabels">Amount</label>
                        </div>
                        <div className="transferFormInputsContainer">
                            <input type="text" className="transferFormInputs" />
                            <input type="text" className="transferFormInputs" />
                        </div>
                    </form>

                    {/* Button Submitting form */}
                    <button className="transferButton">Transfer</button>
                </div>
                {/* Result Container */}
                <h2 className="transferResult">{result}</h2>
            </div>

            {/* User Footer */}
            <UserFooter />

        </React.Fragment>
    );
};
