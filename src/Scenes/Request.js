import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

const Request = () => {
    const user = useSelector(state => state.user)
    const { userId, properties } = user

    const [requestFormData, setRequestFormData] = useState({
        property: properties[0].address,
        requestType: "",
        subject: "",
        description: ""
    })

    const handleChange = e => {
        setRequestFormData({...requestFormData,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(requestFormData)
        axios.post('http://localhost:3100/message/submitRequest', { ...requestFormData, from: userId })
            .then(res => {
                console.log("message submitted", res)
            }).catch(err => {
                alert(`Failed to submit request, ${err}`)
            })
    }

    return (
        <div>
            <div style={{ margin: "0 5vw 5vw 5vw" }}>
                <h3 style={{color: "grey"}}>Submit A Request</h3>
                <div className="textBlock">Thanks for using the tenant portal to submit your request.  We'll get back to you ASAP.</div>
                <div className="textBlock"><b>Billing Qustion: </b>For questions about your account balance, select "Billing Question" from the drop down menu.</div>
                <div className="textBlock"><b>Service and Maintenance Reqeusts: </b>Please describe the problem with lots of detail so we can address the issue the best we can.</div>
                <div className="textBlock"><b>After Hours Maintenance Emergency Phone: (801)YOURMOM</b></div>
                <div className="textBlock"><b>General Question: </b> For any other questions, just select "General" and we'll get everything sorted out for you.</div>
            </div>
            
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                }}
            >
                <label className="formField">Property
                    <select
                        id="property"
                        className="requestTextInput"
                        onChange={handleChange}
                    >
                        {properties.map(property=>{
                            return <option key={property.key} value={property.address}>{property.address}</option>
                        })}
                    </select>
                </label>   

                <label className="formField">Request Type
                    <select
                        id="requestType"
                        className="requestTextInput"
                        onChange={handleChange}
                    >
                        <option value="">Choose a Request Type</option>
                        <option value="billing">Billing Question</option>
                        <option value="general">General Question</option>
                        <option value="maintenance">Maintenance Request</option>
                    </select>
                </label>
                
                <label className="formField">Subject
                    <input
                        id="subject"
                        className="requestTextInput"
                        type="text"
                        onChange={handleChange}
                    />
                </label>

                <label className="formField">Detailed Description of Request
                    <textarea
                        id="description"
                        className="requestDescriptionInput"
                        onChange={handleChange}
                    />
                </label>

                <input
                    className="submitButton"
                    type="submit"
                    value="Submit Request"
                />
            </form>

        </div>
    )
}

export default Request