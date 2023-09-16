import React from "react";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncUpFetch } from "../redux/weatherSlice";
const WeatherPage = () => {
  const isDark = useSelector((state) => state.modeChanger.isDark);

  const time = useSelector((state) => state.weather.time);
  const temp = useSelector((state) => state.weather.temp);
  const weather = useSelector((state) => state.weather.weather);
  const icon = useSelector((state) => state.weather.icon);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Wrapper $isDark={isDark}>
      <div className="title">서울 날씨</div>

      {weather !== "" && (
        <div className="data">
          <>
            {time}에 조회한 서울 날씨입니다.
            <br /> <img alt="" src={icon} />
            <br />
            {weather} <br />
            <br />
            기온: {(temp - 273.15).toFixed(0)}°C
          </>
        </div>
      )}
      <div className="weatherBtn" onClick={() => dispatch(asyncUpFetch())}>
        현재 서울 날씨 조회하기
      </div>
      <Btn onClick={() => navigate("/mode")}>모드 설정하러가기</Btn>
    </Wrapper>
  );
};

export default WeatherPage;
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
  .weatherBtn {
    cursor: pointer;
    margin: 0 auto;
    display: flex;
    background-color: #b1affc;
    height: 50px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    width: 40%;
    margin-top: 100px;
    text-align: center;
  }
  .data {
    margin-top: 50px;
    text-align: center;
    font-size: 20px;
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
