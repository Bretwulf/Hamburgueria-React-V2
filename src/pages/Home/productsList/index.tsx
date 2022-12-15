import { Fragment } from "react";
import Product from "../product";
import { StyledUl } from "./styles";
import { useEffect } from "react";
import { API } from "../../../services/API";
import { iProduct, iUser } from "../../../types/types";
import { useState } from "react";
import Cart from "../cart/index";
import { CartContext } from "../../../context/cartContext";
import { useContext } from "react";
import { SearchContext } from "../../../context/searchContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductList = () => {
  const [products, setProducts] = useState<iProduct[]>([]);
  const { cartOn } = useContext(CartContext);
  const { search, searchState, setSearchState } = useContext(SearchContext);
  const [filteredProds, setFilteredProds] = useState<iProduct[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProds: () => void = async () => {
      try {
        const user: string | null = localStorage.getItem("User");
        const token = localStorage.getItem("Token");
        const response = await API.get<iProduct[]>("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success(`bem vindo(a), ${user}`, {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setProducts(response.data);
      } catch (error) {
        toast.warn("Autenticação falhou. Faça login novamente!", {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/login");
      }
    };
    getProds();
  }, []);

  useEffect(() => {
    if (searchState) {
      setFilteredProds(
        products.filter(
          (element) =>
            element.name.toLowerCase().includes(search.toLowerCase()) ||
            element.category.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, products, searchState]);

  if (searchState) {
    if (filteredProds.length === 0)
      return (
        <div className="flex">
          <p className="body">
            Nenhum resultado encontrado.{" "}
            <span
              className="body-600 pointer"
              onClick={() => setSearchState(false)}
            >
              Limpar pesquisa?
            </span>
          </p>
          {cartOn && <Cart />}
        </div>
      );

    return (
      <Fragment>
        <p className="hcontent body">
          Foram encontrados {""}
          {filteredProds.length}
          {""} resultados.
          <span
            className="body-600 pointer"
            onClick={() => setSearchState(false)}
          >
            {""} Limpar pesquisa?
          </span>
        </p>
        <StyledUl>
          {filteredProds.map((element, index) => (
            <Product key={index} object={element} />
          ))}
        </StyledUl>
        {cartOn && <Cart />}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <StyledUl className="container">
          {products.map((element, index) => (
            <Product key={index} object={element} />
          ))}
        </StyledUl>
        {cartOn && <Cart />}
      </Fragment>
    );
  }
};

export default ProductList;
