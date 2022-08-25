// import React, { useState } from 'react';
import React from 'react';
import axios from 'axios';
import '../../App.css';
const FormData = require('form-data');

const ListProperty = () => {
    const propertyFormData = new FormData();
    // const [propertyFormData, setPropertyFormData] = useState({
    //     address1: '',
    //     address2: '',
    //     city: '',
    //     state: '',
    //     zip: '',
    //     images: [],
    //     price: '',
    //     description: ''
    // })
    // const [image, setImage] = useState(null)

    const handleChange = async e => {
        if (e.target.id === 'image') {
            propertyFormData.append('propertyImage', e.target.files[0], e.target.files[0].name)
            // const file = await fs.readFile(e.target.files[0].name);
            // propertyFormData.append(e.target.id, e.target.files[0]);
            // const encodedString = Buffer.from(e.target.files[0]).toString('base64');
            // propertyFormData.images.push(e.target.files[0])
            // setImage(e.target.files[0])
        }
        else {
            propertyFormData.append(e.target.id, e.target.value);
            // setPropertyFormData({...propertyFormData,
            //     [e.target.id]: e.target.value
            // })
        }
        // console.log(image)
        // if (e.target.files) {   
        //     console.log(e.target.files[0])
        // }
        // console.log(propertyFormData.get(e.target.id))
    }

    // const handleImage = e => {
    //     console.log(e.target.id)
    //     console.log(e.target.files[0])
    //     // const files = {'file': (e.target.value, open(e.target.value, 'rb'), 'image/jpeg')}
    //     propertyFormData.images.push(e.target.files[0])
    //     console.log(propertyFormData.images)
    // }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const response = await axios({
                method: "post",
                url: "http://localhost:3100/property/listProperty",
                data: propertyFormData
            });
            return alert(response)
        } catch(error) {
            console.log(error)
        }

        // axios.post('http://localhost:3100/property/listProperty', data)
        //     .then(res => {
        //         console.log('Property listed', res)
        //     }).catch(err => {
        //         alert(`Failed to list property, ${err}`)
        //     })
    }

    return (
        <div>List Your Property
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                }}
            >
                <label className="formField">Address 1
                    <input
                        id="address1"
                        className="requestTextInput"
                        type="text"
                        onChange={handleChange}
                    />
                </label>
                
                <label className="formField">Address 2
                    <input
                        id="address2"
                        className="requestTextInput"
                        type="text"
                        onChange={handleChange}
                    />
                </label>
                
                <label className="formField">City
                    <input
                        id="city"
                        className="requestTextInput"
                        type="text"
                        onChange={handleChange}
                    />
                </label>

                <label className="formField">State
                    <select
                        id="state"
                        className="requestTextInput"
                        onChange={handleChange}
                    >
                        <option value="">Select a State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </label>

                <label className="formField">Zip Code
                    <input
                        id="zip"
                        className="requestTextInput"
                        type="text"
                        onChange={handleChange}
                    />
                </label>

                <label className="formField">Price
                    <input
                        id="price"
                        className="requestTextInput"
                        type="text"
                        onChange={handleChange}
                    />
                </label>

                <label className="formField">Property Description
                    <input
                        id="description"
                        className="requestDescriptionInput"
                        type="text"
                        onChange={handleChange}
                    />
                </label>

                <label>Property Photos
                    <input
                        type="file"
                        id="image"
                        onChange={handleChange}
                        // onChange={handleImage}
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

export default ListProperty;
