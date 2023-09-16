import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addWord } from "../slices/wordSlice";

const AddWord = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const word = useRef(null);
  const def = useRef(null);
  const ex = useRef(null);
  const myexp = useRef(null);

  const addWordList = () => {
    dispatch(
      addWord({
        word: word.current.value,
        def: def.current.value,
        ex: ex.current.value,
        myexp: myexp.current.value,
      })
    );

    window.alert("단어 추가 완료!");
    navigate("/");
  };

  return (
    <>
      <Container>
        <Title>단어</Title>
        <Input
          type="text"
          ref={word}
          title="단어"
          placeholder="단어를 입력하세요"
        />
        <Title>의미</Title>
        <Input
          type="text"
          ref={def}
          title="의미"
          placeholder="의미를 입력하세요"
        />
        <Title>예문</Title>
        <Input
          type="text"
          ref={ex}
          title="에문"
          placeholder="예문을 입력하세요"
        />
        <Title>나만의 설명 추가</Title>
        <Input
          type="text"
          ref={myexp}
          title="나만의 설명"
          placeholder="나만의 설명을 추가해보세요"
        />
        <Btn onClick={addWordList}>+</Btn>
      </Container>
    </>
  );
};

export default AddWord;

const Container = styled.div`
  padding: 30px;
  background-color: #c7e9b0;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
  font-size: 15px;
  color: #a4bc92;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 500px;
  height: 30px;
  margin-bottom: 20px;
`;

const Btn = styled.div`
  width: 60px;
  height: 60px;
  font-size: 45px;
  border-radius: 50%;
  background-color: #a4bc92;
  color: white;
  position: absolute;
  right: -20px;
  bottom: -20px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
