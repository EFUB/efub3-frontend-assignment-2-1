import styled from "styled-components";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  return (
    <Wrapper>
      <TopSection>
        <ToDoCount>0 ToDos</ToDoCount>
      </TopSection>
      <ToDoItem />
    </Wrapper>
  );
};

export default ToDoList;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeeee;
  border: 1px solid #b4b4b4;
  padding: 0;
  margin-top: 15px;
  margin-bottom: 30px;
`;

const TopSection = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToDoCount = styled.div`
  font-family: "Pretendard-Regular";
  font-weight: 700;
  font-size: 18px;
`;
