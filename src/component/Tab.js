import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Tab = () => {
  return (
    <>
      <Div>
        <Title to="/">쇼핑하기</Title>
        <Title to="/memo">메모장</Title>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: calc(100% - 50vw);
  height: 80px;
  background-color: beige;
  border-radius: 30px;
  margin-top: 60px;
  position: absolute;
  .active {
    color: darkgoldenrod;
    font-weight: 600;
  }
`;

const Title = styled(NavLink)`
  font-size: 25px;
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: darkkhaki;
`;

export default Tab;
