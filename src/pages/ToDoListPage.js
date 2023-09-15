import styled from "styled-components";
import ToDoList from "../components/ToDoListPage/ToDoList";
import ToDoInput from "../components/ToDoListPage/ToDoInput";

const ToDoListPage = () => {
  return (
    <Wrapper>
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
`;

const Title = styled.div`
  width: 50%;
  font-family: "MYYeongnamnu";
  font-size: 70px;
  text-align: center;
`;
