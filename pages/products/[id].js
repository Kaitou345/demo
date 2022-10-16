import { useRouter } from "next/router";
import React from "react";

const Product = () => {
  const { id } = useRouter().query;
  return <div>{id}</div>;
};

export default Product;
