import React from "react";
import styled from "styled-components";
import CartItem from "../components/cards/CartItem";
import Table from "../components/Table";
import OrderSummary from "../components/OrderSummary";
import Breadcrumb from "../components/Breadcrumb";
import { useSelector } from "react-redux";
import Button from "../components/form-elements/Button";

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
  flex-direction: column;
  align-items: center;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextMuted = styled.p`
  text-align: center;
  color: var(--color-gray);
`;
const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const renderCart = () => {
    return (
      <>
        <ProductList>
          <Table thead={["Product", "Price", "Quantity", "Total", ""]}>
            {cart.items.map((cartItem) => (
              <CartItem key={cartItem.product.id} data={cartItem}></CartItem>
            ))}
          </Table>
        </ProductList>
        <OrderSummary totalPrice={cart.totalPrice} />
      </>
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
      <Breadcrumb data={[{ name: " my cart", href: "/cart" }]} />
      <CartContent>
        {cart.items.length > 0 ? renderCart() : renderEmptyCart()}
      </CartContent>
    </CartContainer>
  );
};

export default Cart;
