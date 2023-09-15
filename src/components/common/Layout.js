import { styled } from "styled-components";

const Layout = ({ children }) => {
  return (
    <Container>
      <Padding>{children}</Padding>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Padding = styled.div`
  width: 360px;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 100%;
`;

export default Layout;
