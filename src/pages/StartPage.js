import React from "react";
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
