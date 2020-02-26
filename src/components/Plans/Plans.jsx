import React from "react";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import styled from "styled-components";
import SegmentHeading from "../SegmentHeading/SegmentHeading";

const StyledPriceWrapper = styled.div`
  height: 100px;
`;

const StyledPrice = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: yellow;
`;

const StyledContainer = styled(Container)`
  margin: 2rem auto;
`;

const StyledCol = styled(Col)`
  margin: 1rem auto;
`;

const StyledTableHeading = styled.thead`
  background-color: var(--cyan);
  color: white;
`;

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;


function Plans() {
  return (
    <StyledContainer>
      <SegmentHeading>Plans</SegmentHeading>
      <Row>
        <StyledCol md>
          <Table striped hover bordered>
            <StyledTableHeading>
              <tr>
                <th>
                  <Centered><h5>Economy Plan</h5></Centered>
                </th>
              </tr>
            </StyledTableHeading>
            <tbody>
              <tr>
                <td>
                  <Centered>Feature 1</Centered>
                </td>
              </tr>
              <tr>
                <td>
                  <Centered>Feature 2</Centered>
                </td>
              </tr>
              <tr>
                <td>
                  <Centered>Feature 3</Centered>
                </td>
              </tr>
              <tr>
                <td>
                  <Centered><Button>Economy</Button></Centered>
                </td>
              </tr>
            </tbody>
          </Table>
        </StyledCol>

        <StyledCol md>
          <Table striped hover bordered>
            <StyledTableHeading>
              <tr>
                <th>
                  <Centered><h5>Standard Plan</h5></Centered>
                </th>
              </tr>
            </StyledTableHeading>
            <tbody>
              <tr>
                <td>
                  <Centered>Feature 1</Centered>
                </td>
              </tr>
              <tr>
                <td>
                  <Centered>Feature 2</Centered>
                </td>
              </tr>
              <tr>
                <td>
                  <Centered>Feature 3</Centered>
                </td>
              </tr>
              <tr>
                <td>
                  <Centered><Button>Standard</Button></Centered>
                </td>
              </tr>
            </tbody>
          </Table>
        </StyledCol>

        <StyledCol md>
          <Table striped hover bordered>
            <StyledTableHeading>
              <tr>
                <th>
                  <Centered><h5>Premium plan</h5></Centered>
                </th>
              </tr>
            </StyledTableHeading>
            <tbody>
              <tr>
                <td>
                  <Centered>Feature 1</Centered>
                </td>
              </tr>
              <tr>
                <td>
                  <Centered>Feature 2</Centered>
                </td>
              </tr>
              <tr>
                <td>
                  <Centered>Feature 3</Centered>
                </td>
              </tr>
              <tr>
                <td>
                  <Centered><Button>Prmium</Button></Centered>
                </td>
              </tr>
            </tbody>
          </Table>
        </StyledCol>
      </Row>
    </StyledContainer>
  );
}

export default Plans;
