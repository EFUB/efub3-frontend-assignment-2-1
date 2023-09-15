import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const CartModal = ({ setIsOpen }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Text>Added to cart!</Text>
      <BtnContainer>
        <Btn onClick={() => navigate("/cart")}>go to cart</Btn>
        <OkBtn onClick={() => setIsOpen(false)}>continue</OkBtn>
      </BtnContainer>
    </Container>
  );
};

const BtnContainer = styled.div`
  display: flex;
  margin-left: 2.5rem;
  margin-top: 3rem;
`;

const Btn = styled.button`
  border: none;
  border-radius: 8px;
  width: 6rem;
  font-size: 15px;
  height: 2.2rem;
  background-color: #242424;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-right: 1rem;
  cursor: pointer;
`;

const OkBtn = styled(Btn)`
  background-color: #808080;
`;

const Text = styled.p`
  color: var(--Primary, #242424);
  font-family: Nunito Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 5rem;
  margin-top: 2rem;
`;

const Container = styled.div`
  position: absolute;
  width: 18rem;
  height: 10rem;
  background-color: white;
  border-radius: 10px;
  margin-left: 4%;
  margin-top: 8rem;
  z-index: 2;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 8px 40px 0px rgba(138, 149, 158, 0.2);
`;

export default CartModal;
