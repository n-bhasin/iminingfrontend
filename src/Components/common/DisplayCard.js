import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { AiTwotonePieChart } from "react-icons/ai";
function DisplayCard() {
  return (
    <Card>
      <Row>
        <Col className="text-left">
          <span style={{ fontSize: "25px", color: "#013a60;" }}>
            <AiTwotonePieChart />
          </span>
        </Col>
        <Col>
          <p>heelo2</p>
        </Col>
      </Row>
    </Card>
  );
}

export default DisplayCard;
