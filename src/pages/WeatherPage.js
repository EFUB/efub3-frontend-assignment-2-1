import React from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/weatherSlice";

const WeatherPage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.weather.status);
  const weather = useSelector((state) => state.weather.weather);
  return (
    <Root>
      <Status>{status}</Status>
      <FetchBtn onClick={() => dispatch(fetchWeather())}>
        날씨 정보 불러오기
      </FetchBtn>
      {weather && (
        <>
          <WeatherType>{weather.weather[0].main}</WeatherType>
          <Temp>{(weather.main.temp - 273.15).toFixed(1)}°</Temp>
        </>
      )}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Status = styled.div`
  margin-bottom: 10px;
`;

const FetchBtn = styled.button`
  background: skyblue;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 40px;
  &:hover {
    cursor: pointer;
  }
`;

const WeatherType = styled.div`
  font-size: 40px;
`;

const Temp = styled.div`
  font-size: 80px;
`;

export default WeatherPage;
