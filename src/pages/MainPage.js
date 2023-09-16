import styled from "styled-components";
import ItemBox from "../components/ItemBox";
import { ItemList } from "../item/ItemList";

const MainPage = () => {
  return (
    <Div>
      <Items>
        {ItemList.map((item) => (
          <ItemBox item={item} />
        ))}
      </Items>
    </Div>
  );
};

export default MainPage;

const Div = styled.div``;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3%;

  width: 100%;
`;
