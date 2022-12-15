import { StyledCartCard } from "./styles";
import { iCartObject } from "../../../types/types";
import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { setDefaultResultOrder } from "dns";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

interface iCartCardProps {
  object: iCartObject;
}

const CartCard = ({ object }: iCartCardProps) => {
  const { cart, input, deletet } = useContext(CartContext);
  return (
    <StyledCartCard>
      <div>
        <img src={object.img} alt={object.name} />
      </div>
      <div>
        <div className="product-header">
          <p className="heading four">
            {object.name} [{object.quantity}]
          </p>
          <p
            onClick={() => deletet(cart, object)}
            className="caption grey pointer"
          >
            <DeleteRoundedIcon />
          </p>
        </div>
        <div className="incrementer">
          <button
            onClick={() => input(cart, object, "increase")}
            className="increment-button"
          >
            +
          </button>
          <input value={object.quantity} type="text" disabled />
          <button
            onClick={() => input(cart, object, "decrease")}
            className="increment-button"
          >
            -
          </button>
        </div>
      </div>
    </StyledCartCard>
  );
};

export default CartCard;
