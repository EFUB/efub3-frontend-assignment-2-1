import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { deleteWord } from "./slices/wordSlice";
import { incrementCount, resetCount } from "./slices/repeatSlice";

// 단어 카드 컴포넌트
const Card = () => {
  const dispatch = useDispatch();

  // 단어 삭제
  const deleteWordList = (idx) => {
    dispatch(
      deleteWord({
        idx: idx,
      })
    );
  };

  // 반복횟수 증가
  const addRepeat = () => {
    dispatch(incrementCount(1));
  };

  // 반복횟수 리셋
  const redo = () => {
    dispatch(resetCount());
  };

  const wordList = useSelector((state) => state.modifyList.list);
  const counts = useSelector((state) => state.repeatWord.count);

  return (
    <>
      {wordList?.map((item, idx) => (
        <Wrapper key={idx}>
          <DeleteButton onClick={() => deleteWordList(idx)}>
            <i className="fas fa-trash-alt" />
          </DeleteButton>
          <Word>{item.word}</Word>
          <Def>{item.def}</Def>
          <Ex>{item.ex}</Ex>
          <Title>나만의 설명</Title>
          <MyExp>{item.myexp}</MyExp>
          <IconGroup>
            반복횟수 : {counts}회
            <RepeatButton onClick={() => addRepeat()}>
              <i className="fas fa-check-circle"></i>
            </RepeatButton>
            <RedoButton onClick={() => redo()}>
              <i class="fas fa-redo"></i>
            </RedoButton>
          </IconGroup>
        </Wrapper>
      ))}
    </>
  );
};

export default Card;

const Wrapper = styled.div`
  padding: 10px 15px;
  width: 210px;
  border-radius: 6px;
  background-color: #c7e9b0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-right: 20px;
  margin-bottom: 20px;
  position: relative;
`;

const Word = styled.span`
  font-size: 20px;
  margin-bottom: 5px;
`;

const Def = styled.span`
  font-size: 15px;
`;

const Ex = styled.span`
  font-size: 12px;
  margin-bottom: 10px;
`;

const Title = styled.span`
  font-size: 10px;
  margin-bottom: 3px;
`;

const MyExp = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
`;

const DeleteButton = styled.div`
  color: white;
  position: absolute;
  right: 10px;
  top: 15px;
  font-size: 18px;
  cursor: pointer;
`;

const IconGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 13px;
`;

const RepeatButton = styled.div`
  font-size: 25px;
  color: #b3c99c;
  cursor: pointer;
`;

const RedoButton = styled.div`
  font-size: 20px;
  color: #a4bc92;
  cursor: pointer;
`;
