import Cart from "../component/Shopping/Cart";
import ItemList from "../component/Shopping/ItemList";
import Tab from "../component/Tab";

import styled from "styled-components";

const ShoppingPage = () => {
  return (
    <Div>
      <Tab />
      <ItemList />
      <Cart />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default ShoppingPage;
