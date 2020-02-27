import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import SegmentHeading from "../SegmentHeading/SegmentHeading";

const StyledContainer = styled(Container)`
  margin: 2rem auto 1rem;
`;

const StyledSubTitle = styled.h5`
  color: var(--secondary);
  text-align: center;
`;

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

const ColoredIcon = styled.i`
  color: var(--gray);
`;

const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--main-text-color);
  font-weight: 600;
`;



function Contacts() {
  return (
    <StyledContainer>
      <SegmentHeading>Contact Us</SegmentHeading>
      <StyledSubTitle>
        Do not hesitate to give us a call or send us a message and we will get
        back to you as soon as possible!
      </StyledSubTitle>
      <Row>
        <Col md={3} xs={6}>
          <Centered>
            <ColoredIcon
              className="fa fa-phone fa-4x fa-flip-horizontal"
              aria-hidden="true"
            />
            <StyledContactInfo>
              <div>Phone</div>
              <a href="tel:15551234789">+1 555-1234-789</a>
            </StyledContactInfo>
          </Centered>
        </Col>
        <Col md={3} xs={6}>
          <Centered>
            <ColoredIcon className="fa fa-whatsapp fa-4x" aria-hidden="true" />
            <StyledContactInfo>
              <div>WhatsApp</div>
              <a href="tel:15551234789">+1 555-1234-789</a>
            </StyledContactInfo>
          </Centered>
        </Col>
        <Col md={3} xs={6}>
          <Centered>
            <ColoredIcon className="fa fa-skype fa-4x" aria-hidden="true" />
            <StyledContactInfo>
              <div>Skype</div>
              <a href="tel:15551234789">+1 555-1234-789</a>
            </StyledContactInfo>
          </Centered>
        </Col>
        <Col md={3} xs={6}>
          <Centered>
            <ColoredIcon className="fa fa-envelope fa-4x" aria-hidden="true" />
            <StyledContactInfo>
              <div>Email</div>
              <a href="mailTo:support@example.com?subject=[Feedback%20from%20website]">
                support@example.com
              </a>
            </StyledContactInfo>
          </Centered>
        </Col>
      </Row>
    </StyledContainer>
  );
}

export default Contacts;
