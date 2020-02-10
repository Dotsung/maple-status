import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px;
`;

const Contents = styled.div`
  width: 1100px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

function MainTemplate() {
  return (
    <Container>
      <Contents></Contents>
    </Container>
  );
}

export default MainTemplate;
