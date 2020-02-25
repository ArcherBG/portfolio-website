import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 2rem 0;
`;

const StyledBody = styled.p`
  text-align: justify;
`;

function Services() {
  return (
    <Container>
      <Row>
        <Col md>
          <StyledCard>
            <Card.Img variant="top" src="images/airline-flight-schedules-on-flat-screen-televisions-1716825.jpg" />
            <Card.Body>
            <Card.Title>Road Transport</Card.Title>
            <StyledBody>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae cumque aliquam nobis at porro molestias iure ipsam. Molestiae animi a sapiente, magni dolores pariatur id, dolorem praesentium nemo consequuntur aliquam.
            </StyledBody>
            </Card.Body>
          </StyledCard>
        </Col>

        <Col md>
        <StyledCard>
            <Card.Img variant="top" src="images/arrivals-aankomst-terminal-1-signage-1719490.jpg" />
            <Card.Body>
            <Card.Title>
              Air Transport
            </Card.Title>
            <StyledBody>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae cumque aliquam nobis at porro molestias iure ipsam. Molestiae animi a sapiente, magni dolores pariatur id, dolorem praesentium nemo consequuntur aliquam.
            </StyledBody>
            </Card.Body>
          </StyledCard>
        </Col>

        <Col md>
        <StyledCard>
            <Card.Img variant="top" src="images/people-sign-traveling-blur-2069.jpg" />
            <Card.Body>
            <Card.Title>
              Ship Transport
            </Card.Title>
            <StyledBody>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae cumque aliquam nobis at porro molestias iure ipsam. Molestiae animi a sapiente, magni dolores pariatur id, dolorem praesentium nemo consequuntur aliquam.
            </StyledBody>
            </Card.Body>
          </StyledCard>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
