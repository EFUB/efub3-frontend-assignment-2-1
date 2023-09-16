import styled from "styled-components";
import heart from "../assets/ic_heart.png";
import heart_full from "../assets/ic_heart_red.png";
import cart from "../assets/ic_cart.png";

const ItemBox = ({ item }) => {
  return (
    <Wrapper>
      <ItemImage src={item.image} />
      <ItemInfo>
        <div>
          <div>{item.title}</div>
          <div>{item.price}</div>
        </div>
        <img src={heart} style={{ width: "30px" }} />
      </ItemInfo>
    </Wrapper>
  );
};

export default ItemBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemImage = styled.img`
  width: 100%;
  cursor: pointer;
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;
`;
