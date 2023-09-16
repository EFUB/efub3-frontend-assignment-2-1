import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../redux/toDoSlice";

const ToDoInput = () => {
  const color = useSelector((state) => state.color); // store에 저장된 color 가져오기
  const toDos = useSelector((state) => state.toDo); // store에 저장된 toDo 목록 가져오기
  const [input, setInput] = useState(""); // 입력한 텍스트 저장
  const dispatch = useDispatch();

  // input 태그 change 이벤트
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // 추가 버튼 click 이벤트
  const handleAddClick = () => {
    dispatch(add(input));
    setInput("");
  };

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="할 일을 입력해주세요."
        value={input}
        onChange={(e) => handleInputChange(e)}
      />
      <AddBtn color={color.btnColor} onClick={handleAddClick}>
        추가
      </AddBtn>
    </Wrapper>
  );
};

export default ToDoInput;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  border-bottom: 1px solid #b4b4b4;
  font-family: "Pretendard-Regular";
  font-size: 18px;
  text-align: center;
`;

const AddBtn = styled.button`
  all: unset;
  width: 80px;
  height: 35px;
  border-radius: 40px 80px / 80px 40px;
  background-color: ${(props) => props.color};
  margin-left: 10px;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  text-align: center;
  cursor: pointer;

  &:active {
    border: 2px solid #567797;
  }
`;
