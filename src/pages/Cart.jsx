import React from "react";
import styled from "styled-components";
import CartItem from "../components/cards/CartItem";
import Table from "../components/Table";
import OrderSummary from "../components/OrderSummary";
import Breadcrumb from "../components/Breadcrumb";

const CartContainer = styled.div`
  padding: 1rem;
  padding-top: 0;
`;

const ProductList = styled.div`
  @media (max-width: 592px) {
    overflow-x: auto;
  }
`;
const CartContent = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
const Cart = () => {
  return (
    <CartContainer>
      <Breadcrumb data={[{name:" my cart",href:"/cart"}]}/>
      <CartContent>
        <ProductList>
          <Table thead={["Product", "Price", "Quantity", "Total"]}>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
          </Table>
        </ProductList>
        <OrderSummary />
      </CartContent>
    </CartContainer>
  );
};

export default Cart;
