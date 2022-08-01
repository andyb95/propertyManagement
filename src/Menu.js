import React from 'react';
import { useSelector } from 'react-redux';

const Menu = () => {
    const user = useSelector(state => state.user)
    const menuItems = [
        {
            key: "tenantAccount",
            label: "View Account",
            route: "/tenant",
            tenantOption: true,
            landlordOption: false
        },
        {
            key: "landlordAccount",
            label: "View Account",
            route: "/landlord",
            tenantOption: false,
            landlordOption: true
        },
        {
            key: "payments",
            label: "Payments",
            route: "/payment",
            tenantOption: true,
            landlordOption: false
        },
        {
            key: "reqeust",
            label: "Submit a Request",
            route: '/submitRequest',
            tenantOption: true,
            landlordOption: false
        },
        {
            key: "logout",
            label: "Logout",
            route: '/',
            tenantOption: true,
            landlordOption: true
        }
        // {
        //     key: "documents",
        //     label: "Documents",
        //     route: '/documents',
        //     tenantOption: true,
        //     landlordOption: true
        // }
    ]
    return (
        <div
            style={{
                width: "150px",
                position: "fixed",
                right: "5px",
                top: "48px",
                backgroundColor: "white",
                border: "solid black",
                boxShadow: "2px 2px 2px grey"
            }}
        >
            {menuItems.map(item => {
                if (user.landlord && !item.landlordOption) return null;
                if (user.tenant && !item.tenantOption) return null;
                return (
                    <div
                        key={item.key}
                        style={{
                            margin: "10px"
                        }}
                    >
                        <a
                            href={item.route}
                            style={{
                                pointerEvents: "auto",
                                textDecoration: "none",
                                color: "black"
                            }}
                        >
                            {item.label}
                        </a>
                    </div>
                );
            })}
        </div>
    );
}

export default Menu;