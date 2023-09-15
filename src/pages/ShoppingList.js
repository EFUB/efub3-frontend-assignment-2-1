import { styled } from "styled-components";
import Layout from "../components/common/Layout";
import Header from "../components/ShoppingList/Header";
import OptionBar from "../components/ShoppingList/OptionBar";
import Product from "../components/ShoppingList/Product";
import { ImgList } from "../ImgList";

const ShoppingList = () => {
  return (
    <Layout>
      <Header />
      <OptionBar />
      <Center>
        <Container>
          {ImgList.map((el) => (
            <Product
              key={el.name}
              name={el.name}
              img={el.img}
              price={el.price}
              tag={el.tag}
            />
          ))}
        </Container>
      </Center>
    </Layout>
  );
};

const Center = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  margin-bottom: 2rem;
`;

export default ShoppingList;
