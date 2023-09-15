import { styled } from "styled-components";
import Layout from "../components/common/Layout";
import Header from "../components/Cart/Header";
import Item from "../components/Cart/Item";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  // 수량 * 가격을 합하여 총액 계산
  let totalPrice = cartItems.reduce(
    (acc, cur) => acc + Number(cur.price.slice(0, 2)) * cur.quantity,
    0
  );

  return (
    <Layout>
      <Header />
      {cartItems.map((el, idx) => (
        <Item
          key={idx}
          img={el.img}
          name={el.name}
          price={el.price}
          quantity={el.quantity}
        />
      ))}
      <Bottom>
        <PriceContainer>
          <Text>Total:</Text>
          <TotalPrice>$ {totalPrice}.00</TotalPrice>
        </PriceContainer>
        <Btn>Check out</Btn>
      </Bottom>
    </Layout>
  );
};

const Btn = styled.button`
  width: 343px;
  height: 60px;
  color: var(--white, #fff);
  text-align: center;
  font-family: Nunito Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 8px;
  background: var(--Primary, #242424);
  box-shadow: 0px 10px 20px 0px rgba(48, 48, 48, 0.25);
  border: none;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 2rem;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1rem;
  margin-right: 1rem;
  width: 100%;
`;

const Text = styled.p`
  color: var(--Grey, #808080);
  font-family: Nunito Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TotalPrice = styled.p`
  color: var(--Black-font, #303030);
  text-align: right;
  font-family: Nunito Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 2rem;
`;

export default Cart;
