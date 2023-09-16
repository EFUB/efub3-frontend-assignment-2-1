import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdShoppingCart } from "react-icons/md";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

import { putCart } from "./shoppingSlice";

const Item = ({ name, price, pic, id }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  return (
    <Div>
      <Pic src={pic}></Pic>
      <Name>{name}</Name>
      <Price>{price}원</Price>
      <div>
        <MinusBtn onClick={() => count > 0 && setCount(count - 1)}>-</MinusBtn>
        <p>{count}개</p>
        <PlusBtn onClick={() => setCount(count + 1)}>+</PlusBtn>
      </div>
      <PutBtn
        onClick={() => {
          if (count > 0) {
            const cartItem = {
              id: id,
              name: name,
              price: price,
              count: count,
            };
            dispatch(putCart(cartItem));
            setCount(0);
          } else {
            alert("1개 이상만 장바구니에 담을 수 있어요");
          }
        }}
      >
        담기
      </PutBtn>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 350px;
  width: 250px;
  text-align: center;
  background-color: white;
  margin: 5vw;
  border-radius: 20px;

  div {
    display: flex;
    justify-content: space-around;
    width: 130px;
    p {
      margin: auto;
      font-size: 20px;
    }
  }
`;

const Pic = styled.img`
  width: 150px;
  margin: auto;
`;

const Name = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 23px;
`;

const Price = styled.p`
  font-size: 20px;
`;

const PlusBtn = styled(AiFillPlusCircle)`
  padding: 0;
  display: flex;
  margin: 5px;
  font-size: 25px;
  cursor: pointer;
  color: darkslategrey;
`;

const MinusBtn = styled(AiFillMinusCircle)`
  padding: 0;
  display: flex;
  margin: 5px;
  font-size: 25px;
  cursor: pointer;
  color: darkslategrey;
`;

const PutBtn = styled(MdShoppingCart)`
  padding: 0;
  display: flex;
  margin: 10px;
  font-size: 25px;
  cursor: pointer;
  color: darkslategrey;
`;

export default Item;
