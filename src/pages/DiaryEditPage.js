import React from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setContent, setTitle } from "../redux/diarySlice";

const DiaryEditPage = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.diary.title);
  const content = useSelector((state) => state.diary.content);

  return (
    <Root>
      <Container>
        <Title
          onChange={(e) => dispatch(setTitle(e.target.value))}
          value={title}
          placeholder="제목을 입력하세요."
        />
        <Content
          onChange={(e) => dispatch(setContent(e.target.value))}
          value={content}
          placeholder="오늘 하루는 어땠나요?"
        />
      </Container>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 30px;
  padding: 20px;
  border: 1px solid lightgrey;
`;

const Title = styled.input`
  display: block;
  width: 500px;
  height: 30px;
  margin-top: 10px;
  padding: 0px 10px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid lightgrey;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

const Content = styled.textarea`
  resize: none;
  width: 500px;
  height: 500px;
  margin-top: 15px;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

export default DiaryEditPage;
