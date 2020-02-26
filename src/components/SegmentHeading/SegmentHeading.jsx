import React from "react";
import styled from "styled-components";

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

const Heading = styled.h2`
  text-align: center;
  color: var(--main-color);
`;

const Separator = styled.div`
  border: 2px solid var(--main-color);
  width: 100%;
  height: 2px;
`;

function SegmentHeading(props) {
  return (
    <Centered>
      <span>
        <Heading>{props.children}</Heading>
        <Separator />
      </span>
    </Centered>
  );
}

export default SegmentHeading;
