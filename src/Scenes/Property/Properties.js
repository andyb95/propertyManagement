import React, { useState, useEffect } from 'react';
import Property from '../../Components/Property'
import axios from 'axios';

const Properties = () => {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3100/property/getProperties")
            .then(res => {
                setProperties(res.data)
            }).catch(err => {
                alert(`No properties found. ${err}`)
            })
    },[])

    return (
        <div
            style={{
                paddingTop: "100px"
            }}
        >
            {properties.length > 0 ? (
                properties.map(property => {
                    return (<Property key={property.address1} property={property} />)
                })
            ) : null}
        </div>
    )
}

export default Properties;
