import styled from "styled-components";
import CartBox from "../components/CartBox";
import CartTotalBox from "../components/CartTotalBox";

const CartPage = () => {
  return (
    <div>
      <MainText>장바구니</MainText>
      <CartBox />
      <CartBox />
      <CartBox />
      <CartTotalBox />
    </div>
  );
};

export default CartPage;

const MainText = styled.div`
  text-align: center;

  font-size: 30px;
  font-weight: 600;

  margin-bottom: 30px;
`;
