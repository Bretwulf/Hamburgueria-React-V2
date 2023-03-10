import { useEffect, useState } from "react";
import { iCartObject } from "../types/types";
import { useLocation } from "react-router-dom";
interface iPState {
  cart: iCartObject[];
  setCart: React.Dispatch<React.SetStateAction<iCartObject[]>>;
}

export const usePersistentState: () => iPState = () => {
  const [cart, setCart] = useState<iCartObject[]>([]);
  const [mount, setMount] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setMount(true);
    if (
      localStorage.getItem("Cart") !== "null" &&
      localStorage.getItem("Cart") !== null
    ) {
      const storedCart: string | null = localStorage.getItem("Cart");
      const newCart: iCartObject[] = JSON.parse(storedCart!);
      setCart(newCart);
    } else {
      
      setCart([]);
    }
  }, [location]);
  useEffect(() => {
    if (mount) {
      const cartToStorage: string = JSON.stringify(cart);
      localStorage.setItem("Cart", cartToStorage);
     
    }
  }, [cart]);

  return { cart: cart, setCart: setCart } as iPState;
};
