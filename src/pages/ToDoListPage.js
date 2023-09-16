import styled from "styled-components";
import { useSelector } from "react-redux";
import ToDoList from "../components/ToDoListPage/ToDoList";
import ToDoInput from "../components/ToDoListPage/ToDoInput";

const ToDoListPage = () => {
  const color = useSelector((state) => state.color); // store에 저장된 color 가져오기

  return (
    <Wrapper color={color.backgroundColor}>
      <Title>To Do List</Title>
      <ToDoList />
      <ToDoInput />
    </Wrapper>
  );
};

export default ToDoListPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
`;

const Title = styled.div`
  width: 50%;
  font-family: "MYYeongnamnu";
  font-size: 70px;
  text-align: center;
`;
