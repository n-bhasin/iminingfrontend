import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Table } from "react-bootstrap";
import { getWeb3 } from "../blockchain/web3util";

import { AiTwotonePieChart, AiOutlineCheckCircle } from "react-icons/ai";
import { FaEthereum, FaWallet } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { useAppContext } from "../../libs/contextLibs";
import "./home.css";

function Home(props) {
  // const { web3, accounts } = useAppContext();
  const [web3, setWeb3] = useState("undefined");
  const [accounts, setAccounts] = useState([]);
  const walletAddr = "0xDe4BC510A1B704A7FFCa7D7ebC9c697f3c23b1d9";

  useEffect(() => {
    init();
  }, []);
  const init = async () => {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    setWeb3(web3);
    setAccounts(accounts);
  };

  // console.log(web3, accounts);

  const handleDeposit = () => {
    console.log("deposit button");
    const toeth = web3.utils.toWei(msg.value, "ether");
    const result = web3.eth
      .sendTransaction({
        to: walletAddr,
        from: accounts[0],
        value: toeth,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(result);
  };
  return (
    <>
      <Col xs={8} sm={10} md={7} className="pl-0">
        <Col className="justify-content-left mb-4 mt-3">Dashboard</Col>
        <Row className="p-0">
          <Col sm={12} md>
            <Card className="cardLayout">
              <Row>
                <Col className="text-left">
                  <p
                    style={{
                      fontSize: "25px",
                      color: "#013a60",
                      paddingLeft: "3px",
                    }}
                  >
                    <AiTwotonePieChart style={{ color: "#013a60" }} />
                  </p>
                  <p className="cardText align-bottom mb-0 ">Your Stake</p>
                </Col>
                <Col>
                  <Card.Text className="font-weight-bold textColor mb-0">
                    Staking
                  </Card.Text>
                  <Card.Text className="mb-0">
                    <span style={{ fontSize: "25px" }}>
                      <FaEthereum
                        className="textColor"
                        style={{ fontSize: "18px" }}
                      />
                      5.5
                    </span>
                    {/* <span className="displayCardValue">5.5</span> */}
                  </Card.Text>
                  <Card.Text className="textColor">$289,898</Card.Text>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col sm={12} md>
            <Card className="cardLayout">
              <Row>
                <Col className="text-left">
                  <p
                    style={{
                      fontSize: "25px",
                      color: "#013a60",
                      paddingLeft: "3px",
                    }}
                  >
                    <AiTwotonePieChart style={{ color: "#013a60" }} />
                  </p>
                  <p className="cardText mb-0">Your Rewards</p>
                </Col>
                <Col>
                  <Card.Text className="font-weight-bold textColor mb-0">
                    Rewards
                  </Card.Text>
                  <Card.Text className="mb-0">
                    <span style={{ fontSize: "25px" }}>
                      <FaEthereum
                        className="textColor"
                        style={{ fontSize: "18px" }}
                      />
                      0.56
                    </span>
                    {/* <span className="displayCardValue">5.5</span> */}
                  </Card.Text>
                  <Card.Text className="textColor">$2879.8</Card.Text>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col sm={12} md>
            <Card className="cardLayout">
              <Row>
                <Col className="text-left">
                  <p
                    style={{
                      fontSize: "25px",
                      color: "#013a60",
                      paddingLeft: "3px",
                    }}
                  >
                    <IoRocketSharp style={{ color: "#013a60" }} />
                  </p>
                  <p className="cardText mb-0">Annual Staking Reward Rate</p>
                </Col>
                <Col>
                  <Card.Text className="font-weight-bold textColor mb-0">
                    Staking APR
                  </Card.Text>
                  <Card.Text className="mb-0">
                    <span style={{ fontSize: "25px" }}>
                      {/* <FaEthereum
                          className="textColor"
                          style={{ fontSize: "18px" }}
                        /> */}
                      6.68%
                    </span>
                  </Card.Text>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        {/* validators, income and deposit buttons */}
        <Col sm={12} style={{ marginTop: "20px" }}>
          {/* <Button className="tabButtons primaryColor">
            <AiOutlineCheckCircle className="primaryColor btnIcons" />
            Validators
          </Button>
          <Button className="tabButtons primaryColor">
            <BiCoinStack className="primaryColor btnIcons" />
            Income
          </Button> */}
          <Button className="float-right depositButton" onClick={handleDeposit}>
            <FaWallet className="primaryColor btnIcons" />
            Deposit
          </Button>
        </Col>
        {/* validators, income and deposit buttons */}
        {/* table */}
        <Col>
          <Table responsive className="tableShadow">
            <thead className="headBack">
              <tr>
                <th className="textColor">Balance</th>
                <th className="textColor">Current Apr</th>
                <th className="textColor">State</th>
                <th className="textColor">Last Attestation</th>
                <th className="textColor">Income 7 days</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        {/* table */}
      </Col>
      <Col xs sm={12} md={3}>
        {/* <Col className="p-0 mt-3">
          <Button className="walletButton">
            <FaWallet className="primaryColor btnIcons" />
            <span>Connect Your Wallet</span>
          </Button>
        </Col> */}
        <Col className="p-0 incomeSummary" style={{ marginTop: "60px" }}>
          <p className="text-center font-weight-bold pt-1 mb-2 primaryColor">
            Income Summary
          </p>
          <Table responsive className="primaryColor incomeSummaryTable">
            <tbody className=" primaryColor incomeSummaryTable">
              <tr>
                <th>Last Day</th>
                <td>0.0074 ETH</td>
              </tr>
              <tr>
                <th>Last Week</th>
                <td>0.0074 ETH</td>
              </tr>
              <tr>
                <th>Last Month</th>
                <td>0.0074 ETH</td>
              </tr>
              <tr>
                <th>Total Balance</th>
                <td>0.0074 ETH</td>
              </tr>
              <tr>
                <th>Avg. Eff.</th>
                <td>100% - Perfect</td>
              </tr>
            </tbody>
          </Table>
        </Col>

        <Col className=" mt-3 incomeSummary">
          <Row>
            <Col>
              <span className="stakedSymbol"></span>
              <span className="pl-4">Staked</span>
              <p className="stakedValue">ETH 985,125</p>
            </Col>
            <Col>
              <span className="liquidSymbol"></span>
              <span className="pl-4">Liquid</span>
              <p className="stakedValue">ETH 985,125</p>
            </Col>
          </Row>
        </Col>
      </Col>
    </>
  );
}

export default Home;
