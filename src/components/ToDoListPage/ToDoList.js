import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { complete, remove } from "../../redux/toDoSlice";

const ToDoList = () => {
  const color = useSelector((state) => state.color); // store에 저장된 color 가져오기
  const toDos = useSelector((state) => state.toDo); // store에 저장된 toDo 목록 가져오기
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <TopSection>
        <ToDoCount>{toDos.length} ToDos</ToDoCount>
      </TopSection>
      {toDos.map((item, index) => {
        return (
          <ToDoItem key={index}>
            <CheckboxBtn
              className={toDos[index].isCompleted ? "complete" : ""}
              color={color.btnColor}
              onClick={() => dispatch(complete(index))}
            >
              ✔
            </CheckboxBtn>
            <ToDoText className={toDos[index].isCompleted ? "complete" : ""}>
              {item.text}
            </ToDoText>
            <XBtn onClick={() => dispatch(remove(index))}>✖</XBtn>
          </ToDoItem>
        );
      })}
    </Wrapper>
  );
};

export default ToDoList;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
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

const ToDoItem = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid #b4b4b4;
`;

const CheckboxBtn = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 25px;
  height: 25px;
  margin: 0 15px;

  border-radius: 7px 8px 6px 9px;
  background-color: ${(props) => props.color};
  color: rgba(62, 62, 62, 0);
  font-size: 28px;
  cursor: pointer;

  &.complete {
    color: rgba(62, 62, 62);
  }
`;

const ToDoText = styled.div`
  width: calc(100% - 100px);
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &.complete {
    color: #6f6f6f;
    font-style: italic;
    text-decoration: line-through;
  }
`;

const XBtn = styled.button`
  all: unset;
  margin: 0 15px;
  font-size: 18px;
  cursor: pointer;
`;
