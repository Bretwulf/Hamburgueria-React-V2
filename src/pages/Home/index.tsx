import React from "react";
import Header from "../../components/header";
import { Button } from "../../components/button/index";
import ProductList from "./productsList";
import { useState } from "react";
import Cart from "./cart";

const Home = () => {
  console.log("estou na home");
  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
};

export default Home;
