import React, { useContext } from "react";
import CartCard from "../cartCard";
import { CartBG, StyledAside } from "./styles";
import { CartContext } from "../../../context/cartContext";
import { Button } from "../../../components/button/index";
import { useEffect } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Cart = () => {
  const { cart, clear, cartOn, setCartOn } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <CartBG
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          setCartOn(!cartOn);
        }}
      >
        <StyledAside>
          <div>
            <p className="heading three white">Carrinho de compras</p>
            <button onClick={() => setCartOn(!cartOn)}>
              <CloseRoundedIcon />
            </button>
          </div>
          <div className="block">
            <p className="heading two">Não há itens no carrinho</p>
          </div>
        </StyledAside>
      </CartBG>
    );
  } else {
    return (
      <CartBG
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          setCartOn(!cartOn);
        }}
      >
        <StyledAside>
          <div>
            <p className="heading three white">Carrinho de compras</p>
            <button
              onClick={() => {
                setCartOn(!cartOn);
              }}
            >
              <CloseRoundedIcon style={{ color: "white" }} />
            </button>
          </div>
          <ul>
            {cart.map((element, index) => (
              <CartCard key={index} object={element} />
            ))}
          </ul>
          <div>
            <div>
              <p className="body">Total</p>
              <p className="body">
                R${" "}
                {Math.round(
                  cart.reduce(
                    (previousValue, currentValue) =>
                      previousValue +
                      currentValue.value * currentValue.quantity,
                    0
                  ) * 100
                ) / 100}
              </p>
            </div>
            <Button onClick={clear} full>
              Remover Todos
            </Button>
          </div>
        </StyledAside>
      </CartBG>
    );
  }
};

export default Cart;
