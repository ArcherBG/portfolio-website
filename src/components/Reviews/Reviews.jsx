import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import SegmentHeading from "../SegmentHeading/SegmentHeading";

const CustomCol = styled(Col)`
  margin: 1rem auto;
`;

const StyledCard = styled.div`
  margin: 1rem 0;
  padding: 1.5rem;
  border: 1px solid rgba(156, 151, 156, 0.5);
  border-radius: 4px;
  box-shadow: 2px 2px 4px 2px rgba(156, 151, 156, 0.5);
  font-family: "Times New Roman", Times, serif;
  background-color: white;
`;

const Title = styled.div`
  font-weight: 700;
  color: var(--dark);
`;

const StyledStar = styled.i`
  color: #ffdf00;
  margin-right: 0.25rem;
`;

function Reviews() {
  return (
    <Container>
      <Row>
        <CustomCol>
          <SegmentHeading>Customer Reviews</SegmentHeading>
          <Row>
            <Col md>
              <StyledCard>
                <Title>John Doe</Title>
                <StyledStar className="fa fa-star" aria-hidden="true" />
                <StyledStar className="fa fa-star" aria-hidden="true" />
                <StyledStar className="fa fa-star" aria-hidden="true" />
                <StyledStar className="fa fa-star" aria-hidden="true" />
                <StyledStar className="fa fa-star" aria-hidden="true" />
                <p>
                  Great service. Did a fantastic jon Excellent support. Thank
                  you!
                </p>
              </StyledCard>
            </Col>

            <Col md>
              <StyledCard>
                <Title>John Doe</Title>
                <StyledStar className="fa fa-star" aria-hidden="true" />
                <StyledStar className="fa fa-star" aria-hidden="true" />
                <StyledStar className="fa fa-star" aria-hidden="true" />
                <StyledStar className="fa fa-star" aria-hidden="true" />
                <StyledStar className="fa fa-star" aria-hidden="true" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
                  eveniet vel! Tempora natus consectetur eos similique fugit
                  commodi esse reprehenderit possimus, est perferendis tempore
                  amet culpa maxime quasi minima! Totam.
                </p>
              </StyledCard>
            </Col>

            <Col md>
              <StyledCard>
                <Title>John Doe</Title>
                <StyledStar className="fa fa-star" aria-hidden="true" />
                <StyledStar className="fa fa-star" aria-hidden="true" />
                <StyledStar className="fa fa-star" aria-hidden="true" />
                <StyledStar className="fa fa-star" aria-hidden="true" />
                <StyledStar className="fa fa-star" aria-hidden="true" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </StyledCard>
            </Col>
          </Row>
        </CustomCol>
      </Row>
    </Container>
  );
}

export default Reviews;
