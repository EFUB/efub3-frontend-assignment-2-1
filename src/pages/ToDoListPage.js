import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ToDoList from "../components/ToDoListPage/ToDoList";
import ToDoInput from "../components/ToDoListPage/ToDoInput";

const ToDoListPage = () => {
  const nav = useNavigate();
  const color = useSelector((state) => state.color); // store에 저장된 color 가져오기

  return (
    <Wrapper color={color.backgroundColor}>
      <Title>To Do List</Title>
      <ToDoList />
      <ToDoInput />
      <NavBtn color={color.btnColor} onClick={() => nav("/")}>
        색상 다시 선택하기
      </NavBtn>
    </Wrapper>
  );
};

export default ToDoListPage;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
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

const NavBtn = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 50px;
  margin-top: 50px;

  font-family: "MYYeongnamnu";
  font-size: 20px;
  background-color: ${(props) => props.color};
  border-radius: 40px 80px / 80px 40px;
  cursor: pointer;
`;
