import React from 'react';

const Property = ({ property }) => {
    return (
        <div
            style={{
                height: "150px",
                padding: "15px",
                display: "flex",
                border: "solid",
                borderRadius: "5px",
                marginTop: "15px"
            }}
        >
            <img
                src={property.image}
                alt='property'
                style={{
                    height: "150px",
                    width: "150px",
                    borderRadius: "5px",
                    marginRight: "15px"
                }}
            />
            <div
                style={{
                    position: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                }}
            >
                <div>{property.address1} {property.address2}</div>
                <div>{property.city}, {property.state} {property.zip}</div>
                <div>${property.price}/month </div>
                <div>{property.description}</div>
            </div>
        </div>
    )
}

export default Property;
