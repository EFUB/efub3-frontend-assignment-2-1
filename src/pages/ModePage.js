import React from "react";
import { styled } from "styled-components";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import { useSelector, useDispatch } from "react-redux";
import { light, dark } from "../redux/modeChangerSlice";
import { useNavigate } from "react-router-dom";
const ModePage = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.modeChanger.isDark);
  const navigate = useNavigate();
  return (
    <Wrapper $isDark={isDark}>
      <div className="title">모드 설정하기</div>
      <ModeButtons>
        <Light
          onClick={() => {
            dispatch(light());
          }}
        >
          <img className="sun" alt="" src={sun}></img>
        </Light>
        <Dark
          onClick={() => {
            dispatch(dark());
          }}
        >
          <img className="moon" alt="" src={moon}></img>
        </Dark>
      </ModeButtons>
      <Btn onClick={() => navigate("/")}>날씨 보러가기</Btn>
    </Wrapper>
  );
};

export default ModePage;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => (props.$isDark ? "#3A387E" : "#E9F7FF")};
  color: ${(props) => (props.$isDark ? "white" : "black")};
  font-size: 30px;

  .title {
    text-align: center;
    margin-bottom: 30px;
    padding: 50px;
  }
`;
const ModeButtons = styled.div`
  display: flex;
  margin: 0 auto;

  width: 50vw;
  justify-content: space-between;
`;

const Light = styled.div`
  cursor: pointer;
  display: flex;
  img {
    width: 22vw;
  }
`;

const Dark = styled.div`
  cursor: pointer;
  display: flex;
  img {
    width: 20vw;
  }
`;

const Btn = styled.div`
  margin: 0 auto;
  display: flex;
  background-color: #b1affc;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  width: 30%;
  margin-top: 100px;
  text-align: center;
`;
