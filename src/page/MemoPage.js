import CreateMemo from "../component/Memo/CreateMemo";
import MemoList from "../component/Memo/MemoList";
import Tab from "../component/Tab";

import styled from "styled-components";

const MemoPage = () => {
  return (
    <Div>
      <Tab />
      <MemoList />
      <CreateMemo />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export default MemoPage;
