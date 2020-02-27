import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const StyledFooter = styled.div`
  border-top: 1px solid #444;
  background-color: var(--dark);
  padding: 1rem;
  color: #808080;
  font-size: 0.8rem;
`;

const ContentWrapper = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <StyledFooter>
      <Container>
        <Row>
            <Col>Copyright © {year}</Col>
        </Row>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
