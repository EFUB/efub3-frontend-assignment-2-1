import styled from "styled-components";

const ToDoItem = () => {
  return (
    <Wrapper>
      <CheckboxBtn />
      항목
      <XBtn>✖</XBtn>
    </Wrapper>
  );
};

export default ToDoItem;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  justify-content: space-between;
  align-items: center;

  font-family: "Pretendard-Regular";
  font-size: 18px;
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
  background-color: #a0b7cc;
  color: rgba(62, 62, 62, 0);
  font-size: 23px;
  cursor: pointer;
`;

const XBtn = styled.button`
  all: unset;
  margin: 0 15px;
  font-size: 18px;
  cursor: pointer;
`;
