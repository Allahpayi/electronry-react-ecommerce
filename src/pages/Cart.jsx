import React from "react";
import styled from "styled-components";
import CartItem from "../components/cards/CartItem";
import Table from "../components/Table";
import OrderSummary from "../components/OrderSummary";
import Breadcrumb from "../components/Breadcrumb";
import { useSelector } from "react-redux";
import Button from "../components/form-elements/Button";
import PageBanner from "../containers/PageBanner";

const CartContainer = styled.div``;

const ProductList = styled.div`
  @media (max-width: 592px) {
    overflow-x: auto;
  }
`;
const CartContent = styled.div`
  padding: 1rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 992px) {
  }
`;
const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`;

const TextMuted = styled.p`
  text-align: center;
  color: var(--color-gray);
`;
const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const renderCart = () => {
    return (
      <CartContent>
        <ProductList>
          <Table thead={["Product", "Price", "Quantity", "Total", ""]}>
            {cart.items.map((cartItem) => (
              <CartItem key={cartItem.product.id} data={cartItem}></CartItem>
            ))}
          </Table>
        </ProductList>
        <OrderSummary totalPrice={cart.totalPrice} />
      </CartContent>
    );
  };
  const renderEmptyCart = () => {
    return (
      <Empty>
        <TextMuted>Your cart is currently empty.</TextMuted>
        <Button outlinePrimary block radius href="/products ">
          Continue Shopping
        </Button>
      </Empty>
    );
  };

  return (
    <CartContainer>
      <PageBanner />
      <Breadcrumb data={[{ name: " my cart", href: "/cart" }]} />
      {cart.items.length > 0 ? renderCart() : renderEmptyCart()}
    </CartContainer>
  );
};

export default Cart;
