import styled from "styled-components";
import Item from "./Item";

import macaron from "../../pic/macaron.png";
import mangocake from "../../pic/mangocake.jpg";
import saltbread from "../../pic/saltbread.jpg";

const ItemList = () => {
  return (
    <Div>
      <Item name={"소금빵"} price={3000} pic={saltbread} id={0} />
      <Item name={"망고케이크"} price={25000} pic={mangocake} id={1} />
      <Item name={"마카롱"} price={3500} pic={macaron} id={2} />
    </Div>
  );
};

const Div = styled.div`
  background-color: beige;
  width: calc(100% - 15vw);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  padding: 20px 0;
  height: 50vh;
  overflow: hidden;
`;
export default ItemList;
