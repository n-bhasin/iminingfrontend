import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import { useHistory } from "react-router-dom";
import Routes from "./Routes";
import auth from "./services/auth";
import { AppContext } from "./libs/contextLibs";
import { onError } from "./libs/errorLib";
import { getWeb3 } from "../src/Components/blockchain/web3util";
import { FaBell } from "react-icons/fa";

import "./App.css";

function App() {
  const [web3, setWeb3] = useState("undefined");
  const [accounts, setAccounts] = useState([]);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const history = useHistory();

  useEffect(() => {
    //listening to metamask and retieving the accounts and contracts

    onLoad();
    init();

    window.ethereum.on("accountsChanged", (accounts) => {
      setAccounts(accounts);
    });
  }, []);

  const init = async () => {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    setWeb3(web3);
    setAccounts(accounts);
  };

  async function onLoad() {
    try {
      const user = auth.getCurrentUser();
      if (user != null) {
        console.log(user);
        setUser(user);
        setUserEmail(user.email);
        userHasAuthenticated(true);
      }
      setUser("JD");
    } catch (error) {
      if (error !== "No current user") onError(error);
    }
    setIsAuthenticating(false);
  }
  async function handleLogout() {
    await auth.logout();
    userHasAuthenticated(false);
    history.push("/login");
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
          <Navbar.Text>
            <span className="addrDisplay">
              {accounts[0]
                ? accounts[0].slice(0, 6) + "...." + accounts[0].slice(-6)
                : "Connect"}
            </span>
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
        </Navbar.Collapse>
      </Navbar>

      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
