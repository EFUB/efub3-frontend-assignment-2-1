import styled from "styled-components";
import logo from "./assets/eight_seconds_logo.png";
import heart from "./assets/ic_heart.png";
import cart from "./assets/ic_cart.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <Logo
        src={logo}
        alt="로고"
        onClick={() => {
          navigate("/");
        }}
      />

      <CartIcon
        src={cart}
        alt="장바구니"
        onClick={() => {
          navigate("/cart");
        }}
      />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    height: 60px;
  }
`;

const Logo = styled.img`
  width: 13%;
`;

const HeartIcon = styled.img`
  width: 38px;
  margin-right: 15px;
  @media screen and (max-width: 600px) {
    width: 30px;
  }
`;

const CartIcon = styled.img`
  width: 44px;
  @media screen and (max-width: 600px) {
    width: 33px;
  }
`;
