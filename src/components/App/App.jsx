import React from "react";
import styled, { css } from "styled-components";
import { Button } from "react-bootstrap";

const StyledApp = styled.div`
  height: 100%;
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

function App() {
  return (
    <StyledApp>
      <BackgroundImage />
      App
      <Button variant="primary">Bootstrap Primary Button</Button>
      <StyledButton variant="primary">Modified Bootstrap Button</StyledButton>
    </StyledApp>
  );
}

export default App;
