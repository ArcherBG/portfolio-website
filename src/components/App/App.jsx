import React from 'react';
import styled, { css } from 'styled-components';
import { Button } from 'react-bootstrap';
import Features from '../Features/Features';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import Plans from '../Plans/Plans';
import Contacts from '../Contacts/Contacts';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';
import { HashRouter } from 'react-router-dom';

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

const StyledServicesWrapper = styled.div`
  background-color: #343a40;
`;

function App() {
  return (
    <HashRouter>
      <StyledApp>
        <NavigationBar />
        <BackgroundImage />
        <div id="features">
          <Features />
        </div>
        <StyledServicesWrapper id="services">
          <Services />
        </StyledServicesWrapper>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="plans">
          <Plans />{' '}
        </div>
        <StyledServicesWrapper id="reviews">
          <Reviews />
        </StyledServicesWrapper>
        <div id="contacts">
          <Contacts />
        </div>
        <Footer />
      </StyledApp>
    </HashRouter>
  );
}

export default App;
