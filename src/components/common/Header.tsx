import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 16px 0px 16px;
  z-index: 999;
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  width: 1100px;
`;

const Logo = styled.a`
  /* background: linear-gradient(to right, #fa5252, #f06595);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  color: ${props => props.theme.primaryRed};
  font-size: 2rem;
  font-family: "Chewy";
  cursor: pointer;
  margin-right: 20px;
`;

const Button = styled.a`
  color: ${props => props.theme.blackColor};
  cursor: pointer;
  font-size: 1rem;
  padding: 0 20px;

  &:hover {
    color: ${props => props.theme.primaryRed};
  }
`;

function Header() {
  return (
    <Container>
      <Logo>메이플 스탯 효율 계산기</Logo>
      <Contents>
        <Button>a</Button>
        <Button>b</Button>
        <Button>c</Button>
      </Contents>
    </Container>
  );
}

export default Header;
