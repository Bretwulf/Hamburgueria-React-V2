import { createContext } from "react";
import { cloneDeep } from "lodash";
import { iCartObject, iProduct } from "../types/types";
import { usePersistentState } from "../hooks/hooks";
import { useState } from "react";

export interface iCartContext {
  cart: iCartObject[];
  setCart: React.Dispatch<React.SetStateAction<iCartObject[]>>;
  input: (
    cart: iCartObject[],
    object: iCartObject,
    operation: "increase" | "decrease"
  ) => void;
  add: (object: iProduct, cart: iCartObject[]) => void;
  deletet: (cart: iCartObject[], object: iCartObject) => void;
  clear: () => void;
  cartOn: boolean;
  setCartOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface iCartContextProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iCartContextProps) => {
  const { cart, setCart } = usePersistentState();
  const [cartOn, setCartOn] = useState<boolean>(false);

  const clearCart = () => {
    setCart([]);
  };

  const inputValue = (
    cart: iCartObject[],
    object: iCartObject,
    operation: "increase" | "decrease"
  ) => {
    const operatingArray = cloneDeep(cart);
    const index = operatingArray.findIndex(
      (element) => element.id === object.id
    );

    if (operation === "increase") {
      operatingArray[index].quantity++;
    } else {
      operatingArray[index].quantity--;
    }

    if (operatingArray[index].quantity < 1) operatingArray[index].quantity = 1;

    setCart([...operatingArray]);
  };

  const deleteCart = (cart: iCartObject[], object: iCartObject) => {
    setCart(cart.filter((element: iCartObject) => element.id !== object.id));
  };

  const addCart = (object: iProduct, cart: iCartObject[]) => {
    if (!cart.some((element) => element.id === object.id)) {
      const cartObj: iCartObject = {
        id: object.id,
        name: object.name,
        value: object.price,
        img: object.img,
        quantity: 1,
        category: object.category,
      };
      setCart([...cart, cartObj]);
    } else {
      const operatorArray = cloneDeep(cart);
      const indexOfObject = operatorArray.findIndex(
        (element) => element.id === object.id
      );
      operatorArray[indexOfObject].quantity++;
      setCart([...operatorArray]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        setCart: setCart,
        input: inputValue,
        add: addCart,
        deletet: deleteCart,
        clear: clearCart,
        cartOn,
        setCartOn,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
