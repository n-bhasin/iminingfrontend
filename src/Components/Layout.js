import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Routes from "../Routes";

import Sidebars from "./Sidebars";
function Layout(props) {
  return (
    <Container fluid>
      <Col className="p-0">
        <Row>
          <Col xs sm md={2} className="pr-0">
            <Sidebars history={props.history} />
          </Col>
          {props.children}
        </Row>
        <Col>
          <ul className=" footer justify-content-end align-bottom">
            <li className="footer">iMining.com</li>
            <li className="footer">|</li>
            <li className="footer">Privacy Policy</li>
            <li className="footer">|</li>
            <li className="footer">Terms & Condition</li>
          </ul>
        </Col>
      </Col>
    </Container>
  );
}

export default Layout;
