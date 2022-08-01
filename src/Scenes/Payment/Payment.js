import React from 'react';
import { useSelector } from 'react-redux';
import './Payment.css'

const Payment = () => {
    const user = useSelector(state=>state.user)
    return (
        <div>
            <h3 style={{color: "grey"}}>Payments</h3>
            <div className="textBlock">For questions about your account, go to <a href="/submitRequest">the Request Page</a> to submit a billing question.</div>
            <div className="paymentBlock">
                <div className="textBlock">
                    Current Balance
                </div>
                <div>${user.billing.currentBalance}</div>
                <div className="textBlock">Make this payment via:</div>
                <button
                    className="paymentOptionButton"
                >
                    <a
                        className="paymentLinkText"
                        href="/autoDraft"
                    >
                        Auto-draft
                    </a>
                </button>
                <button
                    className="paymentOptionButton"
                >
                    <a
                        className="paymentLinkText"
                        href="/oneTimePayment"
                    >
                        One Time Payment
                    </a>
                </button>
                <div className="textBlock">Account #: {user.userId}</div>
                <div className="textBlock">Address: {user.properties[0].address}</div>
            </div>
        </div>
    )
}

export default Payment