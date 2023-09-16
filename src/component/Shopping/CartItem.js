import styled from "styled-components";

import { removeCart } from "./shoppingSlice";
import { useDispatch } from "react-redux";

import { MdCancel } from "react-icons/md";

const CartItem = ({ name, price, count, id }) => {
  const dispatch = useDispatch();
  return (
    <Div>
      <DeleteBtn
        // 삭제 버튼 클릭 시 스토어에서 제거 리듀서 호출
        onClick={() => {
          dispatch(removeCart(id));
        }}
      />
      <Name>{name}</Name>
      <Price>{price}원</Price>
      <Count>{count}개</Count>
    </Div>
  );
};

const Div = styled.div`
  background-color: rgba(189, 183, 107, 0.5);
  border-radius: 20px;
  width: 150px;
`;

const DeleteBtn = styled(MdCancel)`
  display: flex;
  margin: 5px;
  font-size: 32px;
  cursor: pointer;
  color: darkslategrey;
`;

const Name = styled.p`
  font-size: 20px;
  margin-top: 0;
`;

const Price = styled.p`
  font-size: 18px;
`;

const Count = styled.p`
  font-size: 18px;
`;

export default CartItem;
