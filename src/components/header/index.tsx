import logo from "../../assets/images/logo.svg";
import { Button } from "../button";
import { StyledCartIcon, StyledHeader, StyledInput } from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { SearchContext } from "../../context/searchContext";
import { UserContext } from "../../context/userContext";

const Header = () => {
  const { logout } = useContext(UserContext);
  const mobile = useMediaQuery("(max-width: 900px)");
  
  const { cart, cartOn, setCartOn } = useContext(CartContext);
  const [searchMobile, setSearchMobile] = useState<boolean>(false);
  const { setSearch, setSearchState, searchState } = useContext(SearchContext);
  const [searchHolder, setSearchHolder] = useState<string>("");
  const [cartQt, setCartQt] = useState<number>(cart.length);
  useEffect(() => {
    if (!mobile) {
      setSearchMobile(false);
    }
  }, [mobile]);

  useEffect(() => {
    const numberOfItems = cart.reduce(
      (previousValue, currentValue) => previousValue + currentValue.quantity,
      0
    );
    setCartQt(numberOfItems);
  }, [cart]);

  if (mobile && searchMobile)
    return (
      <StyledHeader>
        <div className="container">
          <div className="search-input">
            <StyledInput
              onChange={(e) => {
                setSearchHolder(e.target.value);
              }}
              placeholder="Digitar Pesquisa"
            />
            <Button
              onClick={() => {
                setSearch(searchHolder);
                setSearchMobile(false);
                if (!searchState) setSearchState(!searchState);
              }}
              green
              medium
            >
              <SearchIcon style={{ fontSize: "16px" }} />
            </Button>
          </div>
        </div>
      </StyledHeader>
    );

  if (mobile && !searchMobile)
    return (
      <StyledHeader>
        <div className="container">
          <img src={logo} alt="Logo da Kenzie Burguer" />
          <nav className="right-side-header">
            <button
              onClick={() => {
                setSearchMobile(!searchMobile);
              }}
            >
              <SearchIcon
                sx={{
                  color: "grey",
                  fontSize: "25px",
                  "&:hover": { color: "black" },
                }}
              />
            </button>
            <StyledCartIcon
              onClick={() => {
                setCartOn(!cartOn);
              }}
            >
              <ShoppingCartIcon
                sx={{
                  color: "grey",
                  fontSize: "25px",
                  "&:hover": { color: "black" },
                }}
              />
              <div className="item-number">{cartQt}</div>
            </StyledCartIcon>
            <button onClick={logout}>
              <LogoutRoundedIcon
                sx={{
                  color: "grey",
                  fontSize: "25px",
                  "&:hover": { color: "black" },
                }}
              />
            </button>
          </nav>
        </div>
      </StyledHeader>
    );

  return (
    <StyledHeader>
      <div className="container">
        <img src={logo} alt="Logo da Kenzie Burguer" />
        <nav className="right-side-header">
          <div className="search-input">
            <StyledInput
              onChange={(e) => {
                setSearchHolder(e.target.value);
              }}
              placeholder="Digitar Pesquisa"
            />
            <Button
              onClick={() => {
                setSearch(searchHolder);
                if (!searchState) setSearchState(!searchState);
              }}
              green
              medium
            >
              <SearchIcon style={{ fontSize: "16px" }} />
            </Button>
          </div>
          <StyledCartIcon
            onClick={() => {
              setCartOn(!cartOn);
            }}
          >
            <ShoppingCartIcon
              sx={{
                color: "grey",
                fontSize: "25px",
                "&:hover": { color: "black" },
              }}
            />
            <div className="item-number">{cartQt}</div>
          </StyledCartIcon>
          <button onClick={logout}>
            <LogoutRoundedIcon
              sx={{
                color: "grey",
                fontSize: "25px",
                "&:hover": { color: "black" },
              }}
            />
          </button>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
