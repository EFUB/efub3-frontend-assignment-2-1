import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import addCart from "../../assets/addCart.png";
import { addItem } from "../../Redux/cartSlice";
import CartModal from "./CartModal";
import { useState } from "react";

const Product = ({ name, img, price, tag }) => {
  const [isOpen, setIsOpen] = useState(false);

  // 옵션에 해당하는 것만 필터링해서 보여주기
  const selected = useSelector((state) => state.option.value);

  // 장바구니 추가
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem({ img: img, name: name, price: price }));
    setIsOpen(true);
  };

  return tag.includes(selected) ? (
    <>
      {isOpen && <CartModal setIsOpen={setIsOpen} />}
      <Container>
        <Img src={img} />
        <AddCartIcon src={addCart} onClick={handleAddToCart} />
        <Name>{name}</Name>
        <Price>$ {price}</Price>
      </Container>
    </>
  ) : (
    ""
  );
};

const AddCartIcon = styled.img`
  width: 2rem;
  position: absolute;
  margin-top: 9.8rem;
  margin-left: -2.6rem;
  cursor: pointer;
`;

const Container = styled.div`
  margin-top: 0.5rem;
  width: 167px;
`;

const Img = styled.img`
  width: 157px;
`;

const Name = styled.h2`
  color: var(--black-3, #606060);
  font-family: Nunito Sans;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 0.3rem;
`;

const Price = styled.h2`
  color: var(--Black-font, #303030);
  font-family: Nunito Sans;
  font-size: 14px;
  font-weight: 700;
  margin-top: 0;
`;

export default Product;
