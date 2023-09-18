import { styled } from "styled-components";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";
import deleteIcon from "../../assets/delete.png";
import { addItem, removeItem, deleteItem } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";

const Item = ({ img, name, price, quantity }) => {
  const dispatch = useDispatch();
  // 아이템 수량 증가
  const handleAddToCart = () => {
    dispatch(addItem({ img: img, name: name, price: price }));
  };
  // 아이템 수량 감소
  const handleRemoveToCart = () => {
    dispatch(removeItem({ img: img, name: name, price: price }));
  };
  // 아이템 삭제
  const handleDeleteItem = () => {
    dispatch(deleteItem({ img: img, name: name, price: price }));
  };

  return (
    <Container>
      <Img src={img} />
      <InfoContainer>
        <Name>{name}</Name>
        <Price>$ {price}</Price>
        <QuantityContainer>
          <PlusBtn src={plus} onClick={handleAddToCart} />
          <Quantity>{quantity}</Quantity>
          <MinusBtn src={minus} onClick={handleRemoveToCart} />
        </QuantityContainer>
      </InfoContainer>
      <Delete src={deleteIcon} onClick={handleDeleteItem} />
    </Container>
  );
};

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PlusBtn = styled.img`
  width: 1.8rem;
  margin-right: 1rem;
  cursor: pointer;
`;

const Delete = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  margin-left: auto;
  cursor: pointer;
`;

const MinusBtn = styled.img`
  width: 1.8rem;
  margin-left: 1rem;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const Container = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

const Name = styled.p`
  margin: 0;
  color: var(--Disabled-button, #999);
  font-family: Nunito Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 6px;
`;

const Price = styled.p`
  margin: 0;
  color: var(--Primary, #242424);
  font-family: Nunito Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 23px;
`;

const Quantity = styled.p`
  margin: 0;
  color: var(--Primary, #242424);
  font-family: Nunito Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.9px;
`;
export default Item;
