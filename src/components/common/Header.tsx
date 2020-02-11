import React from "react";
import styled from "styled-components";
import oc from "open-color";
import Link from "next/link";

const Container = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Positioner = styled.div`
  width: 1100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 16px;
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Logo = styled.a`
  /* background: linear-gradient(to right, #fa5252, #f06595);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  padding-top: 40px;
  background: linear-gradient(-45deg, ${oc.red[5]}, ${oc.pink[5]});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-family: "Recipekorea";
  cursor: pointer;
  margin-right: 20px;
`;

const Button = styled.a`
  color: ${props => props.theme.blackColor};
  cursor: pointer;
  font-size: 1.3em;
  padding-right: 20px;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.primaryRed};
  }
`;

function Header() {
  return (
    <Container>
      <Positioner>
        <LogoContainer>
          <Link href="/" passHref>
            <Logo>메이플 스탯 효율 계산기</Logo>
          </Link>
        </LogoContainer>
        <Contents>
          <Link href="/stat" passHref>
            <Button>스탯 효율 계산</Button>
          </Link>
          <Link href="/atk" passHref>
            <Button>공격력 계산기</Button>
          </Link>
          <Link href="/statper" passHref>
            <Button>스텟퍼 계산기</Button>
          </Link>
          <Link href="/atkper" passHref>
            <Button>공퍼 계산기</Button>
          </Link>
          <Link href="/igdef" passHref>
            <Button>방무 계산기</Button>
          </Link>
        </Contents>
      </Positioner>
    </Container>
  );
}

export default Header;
