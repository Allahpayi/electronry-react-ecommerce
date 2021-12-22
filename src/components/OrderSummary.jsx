import React, { useState } from "react";
import styled from "styled-components";
import Button from "./form-elements/Button";
import Input from "./form-elements/Input";
import Select from "./form-elements/Select";
import { currencyFormat } from "../utils/currency-format";
import { Link } from "react-router-dom";
const CartSummary = styled.div``;

const CartSummaryHeader = styled.div``;

const CartSummaryTitle = styled.p`
  padding: 1rem 0;
  border-bottom: 2px solid var(--color-black);
  font-weight: 500;
`;

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
`;
const Form = styled.form`
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
  transition: height 1s ease;
  &:last-of-type {
    border-bottom: 0;
  }
`;

const FormTitle = styled.p``;

const GroupText = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
`;
const Terms = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 0.2rem;
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

const OrderSummary = ({totalPrice}) => {
  const [isTerms, setIsTerms] = useState(false);
  const [collapse, setCollapse] = useState(true);
  return (
    <CartSummary>
      <CartSummaryHeader>
        <CartSummaryTitle>ORDER SUMMARY</CartSummaryTitle>
        <Group>
          <GroupText>Sub Total:</GroupText>
          <GroupText>{currencyFormat(totalPrice)}</GroupText>
        </Group>
      </CartSummaryHeader>
      <Form>
        <FormTitle onClick={() => setCollapse(!collapse)}>
          Get Shipping Estimates
        </FormTitle>
        <Select padding block data={["Azerbaijany", "Turkey", "United States"]} />
        <Select padding block data={["Sabirabad", "Baku", "Shirvan"]} />
        <Input block placeholder="ZIP Code" />
        <Button href="/cart" block outlinePrimary>
          Calculate Shipping
        </Button>
      </Form>
      <Form>
        <FormTitle>Coupon Code:</FormTitle>
        <Input block />
        <Group>
          <GroupText>Total:</GroupText>
          <GroupText>{currencyFormat(totalPrice)}</GroupText>
        </Group>
        <Terms>
          <Checkbox
            defaultChecked={isTerms}
            onClick={() => setIsTerms(!isTerms)}
            type="checkbox"
          />
          I agree with the
          <TermsLink to="/">Terms & conditions</TermsLink>
        </Terms>
        <Button disabled={!isTerms} href="checkout" block primary>
          Proceed to Checkout
        </Button>
        <Button href="/products" block outlinePrimary>
          Continue Shopping
        </Button>
      </Form>
    </CartSummary>
  );
};

export default OrderSummary;
