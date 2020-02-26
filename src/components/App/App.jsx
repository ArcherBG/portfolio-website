import React from "react";
import styled, { css } from "styled-components";
import { Container, Col, Button, Row } from "react-bootstrap";
import Features from "../Features/Features";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";
import Plans from "../Plans/Plans";
import Contacts from "../Contacts/Contacts";

const StyledApp = styled.div`
  height: 100%;
  min-width: 400px;
  background-color: #f6f8fa;
`;

const BackgroundImage = styled.div`
  background: url(images/people-inside-airport-large.jpg) no-repeat center fixed;
  background-color: #f6f8fa;
  background-size: cover;
  height: 35rem;
`;

const StyledButton = styled(Button)`
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

const StyledServicesWrapper = styled.div`
    background-color: #343a40;
`;

function App() {
  return (
    <StyledApp>
      <BackgroundImage />
      <Features />
      <StyledServicesWrapper>
        <Services />
      </StyledServicesWrapper>
      <Plans />
      <Contacts />
      <Container>
        <Row>
          <Col>
            <Gallery />
          </Col>
        </Row>
      </Container>


      {/* <section>
        Contacts
        <Button variant="primary">Bootstrap Primary Button</Button>
        <StyledButton variant="primary">Modified Bootstrap Button</StyledButton>
      </section> */}

    </StyledApp>
  );
}

export default App;
