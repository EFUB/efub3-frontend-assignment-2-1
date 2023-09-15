import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import MainComponent from "./MainComponent";

function Template({ content }) {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate(`/todo`);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          m: 4,
          height: "80vh",
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 558,
            height: 528,
            display: "flex",
            justifyContent: "center",
          },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            bgcolor: "#ffe082",
          }}
        >
          {content}
        </Paper>
      </Box>
    </Container>
  );
}

export default Template;
