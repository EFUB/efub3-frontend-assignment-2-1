import styled from "styled-components";

const CartTotalBox = () => {
  return (
    <Wrapper>
      <TotalDiv>
        <span>총 <strong>1</strong>건</span>
        <span><strong>10000</strong>원</span>
      </TotalDiv>
      <OrderBtn>구매하기</OrderBtn>
    </Wrapper>
  );
};

export default CartTotalBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 30px;
`;

const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 20px 0;
`;

const OrderBtn = styled.button`
  font-family: "Pretendard-Regular";
  font-size: 20px;
  width: 100%;
  height: 60px;

  background-color: black;
  color: white;
  border: 0;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
