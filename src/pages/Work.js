import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Work() {
  return (
    <div>
      <Hero>
        <h1>Alexandra Grassl</h1>
        <h2>Northwestern University Software Engineer</h2>
        <h2>DePaul University Bachelors of Science in Business</h2>

      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Hi, I'm Alex!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
      Thanks for stopping by! I am a certified full-stack software engineer from Northwestern University. With my experience in business and my certificate in Web Development, I have found a true passion in finding ways to use the internet to create profits and enjoyment for everyone involved. Please take a look through some of my work and contact me with any questions!
            </p>
        {/* <h2>Fridge Foodie</h2> */}
 
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Work;

