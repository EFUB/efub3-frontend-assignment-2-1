import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import character from "./character.png";
import { Typography } from "@mui/material";
import Template from "./Template";
import MainComponent from "./MainComponent";

function StartPage() {
  return (
    <div>
      <Template content={<MainComponent />}></Template>
    </div>
  );
}

export default StartPage;
