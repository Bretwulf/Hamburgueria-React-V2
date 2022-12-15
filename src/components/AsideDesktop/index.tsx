import React from "react";
import { StyledLoginAside } from "./styles";
import logo from "../../assets/images/logo.svg";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import grid from "../../assets/images/Group 135.svg";

const AsideLoginDesk = () => {
  return (
    <StyledLoginAside>
      <img className="logo" src={logo} alt="" />
      <div className="sideCard">
        <div className="green-box">
          <LocalMallOutlinedIcon style={{ color: "green" }} />
        </div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <span style={{ color: "black" }}>melhores</span> ingredientes.
        </p>
      </div>
      <img className="grid" src={grid}></img>
    </StyledLoginAside>
  );
};

export default AsideLoginDesk;
