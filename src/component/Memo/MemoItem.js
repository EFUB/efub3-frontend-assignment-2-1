import styled from "styled-components";

import { removeMemo } from "./memoSlice";
import { useDispatch } from "react-redux";

import { MdCancel } from "react-icons/md";

const MemoItem = ({ id, memo, date }) => {
  const dispatch = useDispatch();

  return (
    <Div>
      <DeleteBtn
        onClick={() => {
          console.log("id : ", id);
          dispatch(removeMemo(id));
        }}
      />
      <Content>
        <Date>{date}</Date>
        <Memo>{memo}</Memo>
      </Content>
    </Div>
  );
};

const Div = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 200px;
  height: 200px;
  margin: 10px 20px;
  overflow: hidden;
`;

const Content = styled.div`
  height: 150px;
  padding-left: 0.5rem;

  // 스크롤 설정
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox용 */
  -ms-overflow-style: none; /* IE/Edge용 */

  /* Webkit 브라우저용 스크롤바 스타일 정의 */
  &::-webkit-scrollbar {
    width: 0.5rem; /* 스크롤바 너비 조절 */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* 스크롤바 트랙 색상 */
  }
`;

const DeleteBtn = styled(MdCancel)`
  display: flex;
  margin: 5px;
  font-size: 35px;
  cursor: pointer;
  color: darkslategrey;
`;

const Memo = styled.p`
  padding: 10px 5px;
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const Date = styled.p`
  margin: 0;
  text-align: center;
`;

export default MemoItem;
