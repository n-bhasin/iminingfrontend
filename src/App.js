import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Routes from "./Routes";
import auth from "./services/auth";
import { AppContext } from "./libs/contextLibs";
import { onError } from "./libs/errorLib";

import { FaBell } from "react-icons/fa";

import "./App.css";

function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const history = useHistory();

  useEffect(() => {
    onLoad();
    // window.ethereum.on("accountsChanged", (accounts) => {
    //   setAccounts(accounts);
    // });
  }, []);

  async function onLoad() {
    try {
      const user = auth.getCurrentUser();
      if (user != null) {
        setUser(user);
        setUserEmail(user.email);
        userHasAuthenticated(true);
      }
    } catch (error) {
      if (error !== "No current user") onError(error);
    }
    setIsAuthenticating(false);
  }

  return (
    <div className="App">
      <Navbar
        bg="white"
        expand="lg"
        style={{ borderBottom: "3px solid #e6e6e6" }}
      >
        <Navbar.Brand href="#home">
          <img
            src="/iminingLogo.jpeg"
            width="250"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {/* <Nav activationKey={window.location.pathname}>
            
          </Nav> */}
          {isAuthenticated ? (
            <>
              <Navbar.Text>
                {/* <span className="addrDisplay">
                  {accounts[0] ? (
                    accounts[0].slice(0, 6) + "...." + accounts[0].slice(-6)
                  ) : (
                    <Button className="walletButton">
                      <span>Connect Your Wallet</span>
                    </Button>
                  )}
                </span> */}
              </Navbar.Text>
              <Navbar.Text>
                <a href="#login" style={{ textDecoration: "none" }}>
                  <FaBell className="notificationIcon" />
                </a>
              </Navbar.Text>

              <Navbar.Text>
                <a href="#login" style={{ textDecoration: "none" }}>
                  <span className="profileLogo">
                    {userEmail.toString().slice(0, 2)}
                  </span>{" "}
                </a>
              </Navbar.Text>
            </>
          ) : (
            ""
          )}
        </Navbar.Collapse>
      </Navbar>

      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
