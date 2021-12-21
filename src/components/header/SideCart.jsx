import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { currencyFormat } from "../../utils/currency-format";
import Button from "../form-elements/Button";
import SideCartItem from "../cards/SideCartItem";

const CartButton = styled.button`
  position: relative;
  background-color: unset;
  cursor: pointer;
`;
const BasketIcon = styled.i`
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--color-black);
`;

const CartCount = styled.span`
  display: inline-block;
  position: absolute;
  top: -0.6rem;
  right: -0.6rem;
  width: 1.2rem;
  height: 1.2rem;
  line-height: 1.3rem;
  text-align: center;
  border-radius: 50%;
  color: var(--color-main);
  background-color: var(--color-red);
`;
const CartBackdrop = styled.div`
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
const CartBody = styled.div``;

const Cart = styled.div`
  &.active {
    & ${CartBackdrop} {
      opacity: 1;
      user-select: auto;
      visibility: visible;
    }
    & ${CartContent} {
      transform: translateX(0rem);
    }
  }
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid var(--border-color);
`;
const CartTitle = styled.h2`
  color: var(--color-black);
  text-transform: capitalize;
  font-family: var(--font-dm-sans);
`;
const CloseIcon = styled.i`
  width: 1.8rem;
  height: 1.8rem;
  text-align: center;
  line-height: 1.8rem;
  font-size: 1.6rem;
  color: var(--color-black);
`;

const CartFooter = styled.div`
  padding: 1rem 0;
`;
const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
`;
const FooterText = styled.p``;
const TotalPrice = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
`;
const Terms = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.6rem;
  font-weight: 300;
  color: var(--color-gray);
`;
const Checkbox = styled.input`
  margin-right: 0.6rem;
`;

const TermsLink = styled(Link)`
  margin-left: 0.2rem;
  font-weight: 400;
  text-decoration: underline;
  color: var(--color-black);
`;

const SideCart = ({ children, icon, title, count }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTerms, setIsTerms] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Cart className={isOpen ? "active" : ""}>
      <CartButton onClick={toggle}>
        <BasketIcon className="fal fa-shopping-cart"></BasketIcon>
        <CartCount>0</CartCount>
      </CartButton>
      <CartBackdrop onClick={toggle}></CartBackdrop>
      <CartContent>
        <CartHeader>
          <CartTitle>My Cart</CartTitle>
          <CloseIcon onClick={toggle} className="fas fa-times"></CloseIcon>
        </CartHeader>
        <CartBody>
          <SideCartItem />
          <SideCartItem />
          <SideCartItem />
        </CartBody>
        <CartFooter>
          <Group>
            <FooterText>Total</FooterText>
            <TotalPrice>{currencyFormat(130)}</TotalPrice>
          </Group>
          <Terms>
            <Checkbox defaultChecked={isTerms} onClick={()=>setIsTerms(!isTerms)} type="checkbox" />I
            agree with the
            <TermsLink to="/">Terms & conditions</TermsLink>
          </Terms>
          <Group onClick={toggle}>
            <Button disabled={!isTerms} red href="/checkout">
              Check Out
            </Button>
            <Button href="/cart">View Cart</Button>
          </Group>
        </CartFooter>
      </CartContent>
    </Cart>
  );
};

export default SideCart;
