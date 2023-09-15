import styled from "styled-components";

const ToDoInput = () => {
  return (
    <Wrapper>
      <Input type="text" placeholder="할 일을 입력해주세요." />
      <AddBtn>추가</AddBtn>
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
  background-color: #a0b7cc;
  margin-left: 10px;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  text-align: center;
  cursor: pointer;

  &:active {
    border: 2px solid #567797;
  }
`;
