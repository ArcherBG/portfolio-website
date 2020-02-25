import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

const CarouselImage = styled.img`
  background-size: auto;
`;

function Gallery() {
  return (
    <Carousel>
      <Carousel.Item>
        <CarouselImage
          className="d-block w-100"
          src="images/airline-flight-schedules-on-flat-screen-televisions-1716825.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <CarouselImage
          className="d-block w-100"
          src="images/arrivals-aankomst-terminal-1-signage-1719490.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <CarouselImage
          className="d-block w-100"
          src="images/people-sign-traveling-blur-2069.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Gallery;
