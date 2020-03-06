import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

const StyledNavigationBar = styled.div`
  background-color: var(--nav-bar-color);
  position: fixed;
  top: 0;
  padding-right: 2rem;
  width: 100%;
  z-index: 9999;
  display: flex;
  flex-direction: row;
  padding-left: 4rem;
  align-items: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
`;

const Item = styled.div`
  box-sizing: border-box;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.5rem;
  display: inline-block;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const scrollFunc = element => element.scrollIntoView({behavior: 'smooth',  block: 'center'});

function NavigationBar() {
  return (
    <StyledNavigationBar>
      <Container>
        <Row>
          <Col sm md={2} lg={1}><StyledLink scroll={scrollFunc} to="/#features"><Item>Features</Item></StyledLink></Col>
          <Col sm md={2} lg={1}><StyledLink scroll={scrollFunc} to="/#services"><Item>Services</Item></StyledLink></Col>
          <Col sm md={2} lg={1}><StyledLink scroll={scrollFunc} to="/#gallery"><Item>Gallery</Item></StyledLink></Col>
          <Col sm md={2} lg={1}><StyledLink scroll={scrollFunc} to="/#reviews"><Item>Reviews</Item></StyledLink></Col>
          <Col sm md={2} lg={1}><StyledLink scroll={scrollFunc} to="/#contacts"><Item>Contacts</Item></StyledLink></Col>
        </Row>
      </Container>
    </StyledNavigationBar>
  );
}

export default NavigationBar;
