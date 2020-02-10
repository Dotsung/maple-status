import styled from "styled-components";
import Header from "components/common/Header";
import MainTemplate from "components/home/MainTemplate";

const IndexContainer = styled.div`
  width: 100%;
`;

function Index() {
  return (
    <IndexContainer>
      <Header />
      <MainTemplate />
    </IndexContainer>
  );
}

export default Index;
