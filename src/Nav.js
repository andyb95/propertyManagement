import React from 'react';
import MenuIcon from './Images/hamburger-icon-white-16.jpg';

const Nav = ({ menuDisplayed, setMenuDisplayed }) => {
    // const username = "Andy B";
    return (
        <div
            className="nav"
            style = {{
                height: "50px",
                backgroundColor: "black",
                display: "flex",
                width: "100vw",
                position: "fixed",
                top: "0",
            }}
        >
            <div
                style={{
                    color: "white",
                    margin: "12px"
                }}
            >
                LOGO
            </div>
            <h3
                style={{
                    color: "white",
                    position: "fixed",
                    right: "70px",
                    marginTop: "12px"
                }}
            >
                Andy B
            </h3>
            <div 
                style={{
                    position: "fixed",
                    right: "10px"
                }}
                onClick={() => setMenuDisplayed(!menuDisplayed)}
            >
                <img
                    src={MenuIcon}
                    alt="Menu"
                    style={{
                        height: "30px",
                        width: "30px",
                        margin: "10px"
                    }}
                />
            </div>
        </div>
    );
}

export default Nav;