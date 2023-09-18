import cart from "../../assets/cart.png";
import styled from "styled-components";
import search from "../../assets/search.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <SearchIcon src={search} />
      <TitleContainer>
        <Title>Make home</Title>
        <SubTitle>BEAUTIFUL</SubTitle>
      </TitleContainer>
      <CartIcon src={cart} onClick={() => navigate("/cart")} />
    </Container>
  );
};

const SearchIcon = styled.img`
  width: 1.5rem;
`;

const Title = styled.h2`
  margin-bottom: 0;
  color: #909090;
  font-size: 1rem;
  font-weight: 400;
`;

const SubTitle = styled.h1`
  margin-top: 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

const CartIcon = styled.img`
  width: 1.5rem;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
