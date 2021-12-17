import React from "react";
import SideNav from "./SideNav";

const Cart = () => {
  return (
    <SideNav icon="fal fa-shopping-cart" title="Your Bag" text="cart" count={0}>
      Cart Item
    </SideNav>
  );
};

export default Cart;
