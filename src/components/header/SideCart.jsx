import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { currencyFormat } from "../../utils/currency-format";
import Button from "../form-elements/Button";
import SideCartItem from "../cards/SideCartItem";
import { useSelector } from "react-redux";
import Text from "../tools/Text";
import Group from "../tools/Group";
import Checkbox from "../form-elements/Checkbox";
import IconButton from "../form-elements/IconButton";
import BadgeButton from "../form-elements/BadgeButton";

const Backdrop = styled.div`
  position: fixed;
  z-index: 98;
  right: 0%;
  top: 0%;
  height: 100%;
  width: 100%;
  background-color: var(--overlay);
  opacity: 0;
  user-select: none;
  visibility: hidden;
  transition: transform 0.3s ease;
`;
const CartContent = styled.div`
  position: fixed;
  right: 0%;
  top: 0%;
  z-index: 99;
  transform: translateX(25rem);
  height: 100vh;
  width: 25rem;
  padding: 1rem;
  background-color: var(--color-main);
  overflow-y: auto;
  transition: transform 0.3s ease;
`;
const SideCartContainer = styled.div`
  &.active {
    & ${Backdrop} {
      opacity: 1;
      user-select: auto;
      visibility: visible;
    }
    & ${CartContent} {
      transform: translateX(0rem);
    }
  }
`;
const SideCart = ({ children, icon, title, count }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTerms, setIsTerms] = useState(false);
  const cart = useSelector((state) => state.cart);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const renderSideCart = () => {
    return (
      <>
        <Group direction="column">
          {cart.items
            .reverse()
            .slice(0, 3)
            .map((item) => (
              <SideCartItem key={item.product.id} data={item} />
            ))}
        </Group>
        <Group direction="column">
          <Group
            margin="1rem 0"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize="1.2">Total</Text>
            <Text weight="600" fontSize="1.2">
              {currencyFormat(cart.totalPrice)}
            </Text>
          </Group>
          <Group alignItems="center">
            <Checkbox
              checked={isTerms}
              onClick={() => setIsTerms(!isTerms)}
              margin="0 .4rem 0 0"
              type="checkbox"
            />
            <Text weight="300" color="var(--color-gray)">
              I agree with the
            </Text>
            <Text
              weight="400"
              color="var(--color-black)"
              decoration="underline"
            >
              <Link to="/">Terms & conditions</Link>
            </Text>
          </Group>
          <Group
            onClick={toggle}
            justifyContent="space-between"
            alignItems="center"
          >
            <Button disabled={!isTerms} red href="/checkout">
              Check Out
            </Button>
            <Button href="/cart">View Cart</Button>
          </Group>
        </Group>
      </>
    );
  };

  const renderSideEmpty = () => {
    return (
      <>
        <Group direction="column">
          <Text align="center" weight="300" fontSize="1.1">
            Your cart is currently empty.
          </Text>
          <Button outlinePrimary block href="/products ">
            Continue Shopping
          </Button>
        </Group>
      </>
    );
  };

  return (
    <SideCartContainer className={isOpen ? "active" : ""}>
      <BadgeButton
        onClick={toggle}
        color="var(--color-main)"
        bg="var(--color-red)"
        badgeText={cart.items.length}
      >
        <IconButton size="1.6" className="fal fa-shopping-cart"></IconButton>
      </BadgeButton>
      <Backdrop onClick={toggle} />
      <CartContent>
        <Group justifyContent="space-between" margin="0 0 1rem 0">
          <Text fontSize="1.5" weight="500" transform="uppercase">
            My Cart
          </Text>
          <IconButton
            size="1.7"
            onClick={toggle}
            className="fas fa-times"
          ></IconButton>
        </Group>
        {cart.items.length > 0 ? renderSideCart() : renderSideEmpty()}
      </CartContent>
    </SideCartContainer>
  );
};

export default SideCart;
