import { styled } from "styled-components";
import arrow from "../../assets/arrow.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Arrow src={arrow} onClick={() => navigate(-1)} />
      <Title>My cart</Title>
    </Container>
  );
};
const Arrow = styled.img`
  width: 1.5rem;
  cursor: pointer;
  position: absolute;
`;

const Title = styled.h2`
  color: var(--Black-font, #303030);
  font-family: Merriweather;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
  text-align: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  width: 100%;
`;

export default Header;
