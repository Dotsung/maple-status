import styled from "styled-components";
import Header from "components/common/Header";

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
  padding: 0px 16px;
`;

function PageTemplate({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Positioner>
        <Header />
        {children}
      </Positioner>
    </Container>
  );
}

export default PageTemplate;
