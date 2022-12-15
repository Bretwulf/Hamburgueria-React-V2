import logo from "../../assets/images/logo.svg";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { StyledLoginAsideMobile } from "./styles";

const AsideLoginMobile = () => {
  return (
    <StyledLoginAsideMobile>
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
    </StyledLoginAsideMobile>
  );
};

export default AsideLoginMobile;
