import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import SegmentHeading from "../SegmentHeading/SegmentHeading";

const CustomRow = styled(Row)`
  margin: 2rem 0;
`;

const CustomCol = styled(Col)`
  margin: 1rem 0;
`;

const Heading = styled.h2`
  text-align: center;
  color: var(--main-color);
  margin-top: 1rem;
`;

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Separator = styled.div`
  border: 2px solid var(--main-color);
  width: 190px;
  height: 2px;
`;

const Title = styled.h4`
  color: var(--main-text-color);
  text-align: center;
  margin: 0.5rem 0;
`;

const Subtitle = styled.div`
  color: var(--secondary-text-color);
  font-weight: 600;
  text-align: justify;
  text-justify: inter-word;
`;

const ColoredIcon = styled.i`
  color: var(--main-color);
`;


function Features() {
  return (
    <Container>
      <Row>
        <CustomCol>
          <SegmentHeading>Key Features</SegmentHeading>
          <CustomRow>
            <CustomCol sm={3}>
              <Centered>
                <ColoredIcon
                  className="fa fa-thumbs-up fa-4x"
                  aria-hidden="true"
                ></ColoredIcon>
                <Title>Safety first</Title>
                <Subtitle>Safety is out top priority</Subtitle>
              </Centered>
            </CustomCol>
            <CustomCol sm={3}>
              <Centered>
                <ColoredIcon
                  className="fa fa-diamond fa-4x"
                  aria-hidden="true"
                ></ColoredIcon>
                <Title>Premium quality for you</Title>
                <Subtitle>We provide only premium quality to our clients</Subtitle>
              </Centered>
            </CustomCol>
            <CustomCol sm={3}>
            <Centered>
                <ColoredIcon
                  className="fa fa-heart fa-4x red"
                  aria-hidden="true"
                ></ColoredIcon>
                <Title>We care about our clients</Title>
                <Subtitle>We care about our customers</Subtitle>
              </Centered>
            </CustomCol>
            <CustomCol sm={3}>
            <Centered>
                <ColoredIcon
                  className="fa fa-globe fa-4x"
                  aria-hidden="true"
                ></ColoredIcon>
                <Title>International customers </Title>
                <Subtitle>We serve customers from all over the world</Subtitle>
              </Centered>
            </CustomCol>
          </CustomRow>
        </CustomCol>
      </Row>
    </Container>
  );
}

export default Features;
