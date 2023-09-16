import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ColorSection from "../components/MainPage/ColorSection";

const MainPage = () => {
  const color = useSelector((state) => state.color); // store에 저장된 color 가져오기
  const nav = useNavigate();

  return (
    <Wrapper color={color.backgroundColor}>
      <Title>To Do List</Title>
      <ColorSection isBackgroundColor={true} />
      <ColorSection isBackgroundColor={false} />
      <NavBtn color={color.btnColor} onClick={() => nav("/to-do-list")}>
        이동
      </NavBtn>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
`;

const Title = styled.div`
  width: 50%;
  font-family: "MYYeongnamnu";
  font-size: 70px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: solid 1px #b8b8b8;
`;

const NavBtn = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin-top: 50px;

  font-family: "MYYeongnamnu";
  font-size: 28px;
  background-color: ${(props) => props.color};
  border-radius: 40px 80px / 80px 40px;
  cursor: pointer;
`;
