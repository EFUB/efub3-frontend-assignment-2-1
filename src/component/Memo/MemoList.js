import styled from "styled-components";
import { useSelector } from "react-redux";
import MemoItem from "./MemoItem";

const MemoList = () => {
  // 스토어에서 상태 읽어오기
  const memos = useSelector((state) => state.memo.memos);

  return (
    <Div>
      {memos.map((memo) => (
        <MemoItem
          key={memo.id}
          id={memo.id}
          memo={memo.memo}
          date={memo.date}
        />
      ))}
    </Div>
  );
};

const Div = styled.div`
  background-color: beige;
  width: calc(100% - 15vw);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 200px;
  padding: 20px 0;
  height: 50vh;

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

export default MemoList;
