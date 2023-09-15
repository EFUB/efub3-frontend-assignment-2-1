import React from "react";
import character from "./../character.png";
import { Typography } from "@mui/material";
import Template from "../components/Template";
import MainComponent from "../components/MainComponent";

function StartPage() {
  return (
    <div>
      <Template content={<MainComponent />}></Template>
    </div>
  );
}

export default StartPage;
