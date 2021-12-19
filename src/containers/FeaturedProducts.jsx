import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Grid from "../components/Grid";
const product1 = require("../assets/images/products/product-1.1.jpg");
const product2 = require("../assets/images/products/product-2-3.jpg");
const product3 = require("../assets/images/products/product-2-4.jpg");
const product4 = require("../assets/images/products/product-6-2.jpg");
const product5 = require("../assets/images/products/product-laptop-11.jpg");
const product6 = require("../assets/images/products/product-laptop-7.jpg");


const FeaturedProductsContainer = styled.div`
  padding: 0 1rem;
`;
const FeaturedProducts = () => {
  return (
    <FeaturedProductsContainer>
      <Grid col={1} mdCol={3} lgCol={5} gap={20}>
        <Card img={product1} />
        <Card img={product2} />
        <Card img={product3} />
        <Card img={product4} />
        <Card img={product5} />
        <Card img={product6} />
      </Grid>
    </FeaturedProductsContainer>
  );
};

export default FeaturedProducts;
