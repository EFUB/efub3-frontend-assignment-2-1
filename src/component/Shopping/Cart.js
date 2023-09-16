import styled from "styled-components";
import { useSelector } from "react-redux";
import React from "react";

import CartItem from "./CartItem";

const Cart = () => {
  const items = useSelector((state) => state.shopping.number);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  return (
    <Div>
      <Title>장바구니</Title>
      <ItemWrapper>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            count={item.count}
            id={item.id}
          />
        ))}
      </ItemWrapper>
      <div>
        <Title>가격</Title>
        <Price>{totalPrice}원</Price>
      </div>
    </Div>
  );
};

const Div = styled.div`
  width: 100vw;
  bottom: 0;
  position: absolute;
  display: flex;
  height: 200px;
  background-color: lightyellow;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const ItemWrapper = styled.div`
  width: calc(100% - 30vw);
  display: flex;
  justify-content: space-around;
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: 600;
`;

const Price = styled.p`
  font-size: 20px;
`;

export default Cart;
