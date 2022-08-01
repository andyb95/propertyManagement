import React, { useState } from 'react';
import '../../App.css'
import { useSelector } from 'react-redux';

const AutoDraft = () => {
    const user = useSelector(state=>state.user)
    const [displayAutoDraftForm, setDisplayAutoDraftForm] = useState(false)
    const [autoDraftFormData, setAutoDraftFormData] = useState({
        accountType: "checking",
        accountNumber: "",
        confirmAccountNumber: "",
        startDate: "",
        bankRoutingNumber: "",
    })

    const handleChange = e => {
        console.log(e.target.id)
        console.log(e.target.value)
        console.log(e.target)
        setAutoDraftFormData({...autoDraftFormData,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(autoDraftFormData)
    }

    return (
        <div style={{ padding: "0 25px 0 25px" }}>
            <h3 style={{color: "grey"}}>Auto-Draft</h3>
            <div className="textBlock">Sign up here to set up Auto-Draft for your rental assessments. Under this Auto Draft agreement, your regularly scheduled assessments will be drafted on the 5th of each month.</div>
            <div className="textBlock">If your current balance is more than your recurring dues, you can <a className="paymentLinkText" href="/oneTimePayment">submit a one-time payment here</a> or mail a check to 498 S 1080 W American Fork, UT 84003 to bring your account current.</div>
            <div className="textBlock">If you want the ACH to run for the current month, please sign up before the 3rd of the month. After the 3rd, the ACH will not take effect until the following month.</div>
            <div className="textBlock">Please keep in mind that this authorization is for your regularly scheduled Assessments only. If you have a question about your draft or the best payment option for your unique situation, please submit a <a className="paymentLinkText" href="/submitRequest">Billing Question</a>.</div>
        
            {displayAutoDraftForm ? (
                <form
                    onSubmit={handleSubmit}
                    style={{
                        height: "250px",
                        display: "flex",
                        flexFlow: "column",
                        flexWrap: "wrap" 
                    }}
                >
                    <div>
                        <label className="formField">Checking Account Number
                            <input
                                id="accountNumber"
                                className="autoDraftInput"
                                type="text"
                                onChange={handleChange}
                            />
                        </label>
                        
                        <label className="formField">Confirm Checking Account Number
                            <input
                                id="confirmAccountNumber"
                                className="autoDraftInput"
                                type="text"
                                onChange={handleChange}
                            />
                        </label>
                        
                        <label className="formField">Bank Routing Number
                            <input
                                id="bankRoutingNumber"
                                className="autoDraftInput"
                                type="text"
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div>
                        <label className="formField">Start Date
                            <input
                                id="confirmAccountNumber"
                                className="autoDraftInput"
                                type="date"
                                onChange={handleChange}
                            />
                        </label>

                        <label className="formField">Account Type
                            <select
                                id="accountType"
                                className="autoDraftInput"
                                onChange={handleChange}
                            >
                                <option value="checking">Checking</option>
                                <option value="savings">Savings</option>
                            </select>
                        </label>
                    </div>

                    <input
                        className="submitButton"
                        type="submit"
                        value="Enroll in Auto-Draft"
                        style={{
                            margin: "15px auto"
                        }}
                    />
                </form>
            ):null}

            <h3>Properties</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Account</th>
                        <th>Property</th>
                        <th>Bank Account</th>
                        <th>Routing</th>
                        <th>Start Date</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>abr14201</td>
                        <td>498 S</td>
                        <td>9075</td>
                        <td>223344</td>
                        <td>7/2/2022</td>
                        <td>$0.00</td>
                        {user.billing.autoDraft? (
                            <div>
                                {/* <a>Edit</a>
                                <a>Disable</a> */}
                            </div>
                        ) : displayAutoDraftForm ? (
                            <td>
                                <button
                                    className="cancelButton"
                                    onClick={()=>setDisplayAutoDraftForm(false)}
                                >
                                    Cancel
                                </button>
                            </td>
                        ) : (
                            <td>
                                <button
                                    className="submitButton"
                                    onClick={()=>setDisplayAutoDraftForm(true)}
                                >
                                    Enroll
                                </button>
                            </td>
                        )}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AutoDraft;
