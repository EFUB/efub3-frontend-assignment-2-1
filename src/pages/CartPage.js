import styled from "styled-components";

const CartPage = () => {
  return (
    <div>
      <MainText>장바구니</MainText>
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
