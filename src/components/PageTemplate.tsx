import styled from "styled-components";
import Header from "components/common/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function PageTemplate({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

export default PageTemplate;
