import React from "react";
import { ProdCard } from "./styles";
import { iProduct } from "../../../types/types";
import { Button } from "../../../components/button/index";
import { CartContext } from "../../../context/cartContext";
import { useContext } from "react";
import { toast } from "react-toastify";

interface iProductProps {
  object: iProduct;
}

const Product = ({ object }: iProductProps) => {
  /**/
  const { cart, add } = useContext(CartContext);
  return (
    <>
      <ProdCard>
        <div>
          <img src={object.img} alt="the product"></img>
        </div>
        <div>
          <h3 className="heading three">{object.name}</h3>
          <p className="caption">{object.category}</p>
          <p className="body green">R$ {object.price}</p>
          <Button
            medium
            green
            onClick={() => {
              add(object, cart);
              toast.success(`Adicionou um ${object.name} ao carrinho`, {
                position: "top-center",
                autoClose: 1200,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }}
          >
            Adicionar
          </Button>
        </div>
      </ProdCard>
    </>
  );
};

export default Product;
