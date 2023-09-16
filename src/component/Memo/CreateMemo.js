import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { addMemo } from "./memoSlice";
import { BiSolidPencil } from "react-icons/bi";

const CreateMemo = () => {
  // 입력값 저장하는 state
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  // submit 시 호출되는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    // text가 있는 경우에만 리듀서 호출
    if (text) {
      dispatch(addMemo(text));
      setText("");
    }
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="메모를 입력하세요"
        ></Input>
        <SubmitBtn type="submit">
          <PencilIcon />
        </SubmitBtn>
      </Form>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10vh 0;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  justify-content: space-around;
`;

const Input = styled.input`
  border: none;
  text-decoration: none;
  background-color: rgba(189, 183, 107, 0.5);
  padding: 10px 20px;
  font-size: 25px;
  border-radius: 15px;
  outline: none;
`;

const SubmitBtn = styled.button`
  cursor: pointer;
  border: none;
  text-decoration: none;
  background-color: white;
  outline: none;
`;

const PencilIcon = styled(BiSolidPencil)`
  font-size: 40px;
  color: darkslategrey;
`;

export default CreateMemo;
