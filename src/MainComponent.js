import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import character from "./character.png";
import { Typography } from "@mui/material";

function MainComponent() {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate(`/todo`);
  };

  return (
    <div>
      <Box
        sx={{
          m: 5,
          height: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mr: 2,
            fontFamily: "Arial",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          지금 당신의 할 일을 기록하고,
          <br /> 기억해 보세요!
        </Typography>

        <img src={character} width="120" height="120" sx={{ pt: 3 }}></img>
      </Box>
      <Button variant="contained" color="success" onClick={handleBtnClick}>
        할 일 작성하러 가기
      </Button>
    </div>
  );
}

export default MainComponent;
