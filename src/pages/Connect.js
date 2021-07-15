import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Connect() {
  return (
    <div>
      <Hero>
        <h1>Alexandra Grassl</h1>
        <h2>Take some time, Connect with me!</h2>

      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Let's Connect</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
<h4>LinkedIn: https://www.linkedin.com/in/alexandra-grassl-a61a07126/ </h4>
<h4>Email: alexandragrassl2021@u.northwestern.edu </h4>
<h4>Phone: (773) 420-6546+ </h4>

 
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Connect;
