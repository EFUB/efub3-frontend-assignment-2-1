import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Card from "../Card";

const Home = () => {
  const navigate = useNavigate();

  // 단어 추가 페이지로 이동
  const handleButtonClick = () => {
    navigate("/addWord");
  };

  return (
    <>
      <Container>
        <Title>My Voca 🌱</Title>
        <AddButton onClick={handleButtonClick}>Add Word</AddButton>
        <CardWrapper>
          <Card></Card>
        </CardWrapper>
      </Container>
    </>
  );
};

export default Home;

const Title = styled.div`
  width: 100%;
  color: #a4bc92;
  font-size: 30px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 15px;
`;

const AddButton = styled.div`
  position: absolute;
  align-items: center;
  padding: 8px 12px;
  border-radius: 5px;
  right: 15px;
  top: 17px;
  font-weight: 500;
  font-size: 18px;
  color: white;
  background-color: #a4bc92;
  cursor: pointer;
`;
const Container = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #ddffbb;
`;

const CardWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;
