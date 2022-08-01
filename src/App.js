import React, { useState } from 'react';
import './App.css';
import Nav from './Nav'
import Menu from './Menu'
import Routes from './Routes'

const App = () => {
  const [menuDisplayed, setMenuDisplayed] = useState(false);
  return (
    <div className="App"
      style={{
        height: "100vh",
        width: "100vw"
      }}
    >
      <Nav
        menuDisplayed={menuDisplayed}
        setMenuDisplayed={setMenuDisplayed}
      />
      {menuDisplayed ? (
        <Menu />
      ):null}

      <div className="body">
        {Routes}
      </div>

      {' '}
      <div style={{ marginTop: "70vh" }}>
        <ol>integrations
            <li>mailchimp</li>
            <li>ach payments</li>
            <li>rentler, zillow, rentCafe?</li>
        </ol>
        <ol>icebox
            <li>quickbooks</li>
            <li>other integrations</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
