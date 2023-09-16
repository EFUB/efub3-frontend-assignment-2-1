import styled from "styled-components";
import { ItemList } from "../item/ItemList";
import plus from "../assets/ic_plus.png";
import minus from "../assets/ic_minus.png";
import close from "../assets/ic_close.png";

const CartBox = () => {
  return (
    <Wrapper>
      <ItemImage src={ItemList[0].image} />
      <div>
        <ItemTitle>{ItemList[0].title}</ItemTitle>
        <ItemPrice>{ItemList[0].price}</ItemPrice>

        <ItemQuantity>
          <ItemQuanBtn>
            <img src={plus} alt="plus" />
          </ItemQuanBtn>
          <ItemQuanText>1</ItemQuanText>
          <ItemQuanBtn>
            <img src={minus} alt="minus" />
          </ItemQuanBtn>
        </ItemQuantity>
      </div>

      <CloseBtn src={close} alt="x" />
    </Wrapper>
  );
};

export default CartBox;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  
  margin: 10px 0;
`;

const ItemImage = styled.img`
  width: 150px;
`;

const ItemTitle = styled.div``;

const ItemPrice = styled.div`
  font-weight: 600;
  margin: 15px 0;
`;

const ItemQuantity = styled.div`
  display: flex;
  gap: 10px;
`;

const ItemQuanBtn = styled.span`
  background-color: #dbdbdb;
  border-radius: 3px;
  cursor: pointer;
  padding: 0 5px;
  img {
    width: 12px;
  }
`;

const ItemQuanText = styled.span``;

const CloseBtn = styled.img`
  width: 30px;
  position: absolute;
  top: 0;
  right: 0;
`;
