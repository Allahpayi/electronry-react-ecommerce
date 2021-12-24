import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./form-elements/Button";
import Input from "./form-elements/Input";
import Checkbox from "./form-elements/Checkbox";
import Select from "./form-elements/Select";
import Text from "./tools/Text";
import Group from "./tools/Group";
import Grid from "./Grid";
import { currencyFormat } from "../utils/currency-format";

const Title = styled.p`
  padding: 1rem 0;
  border-bottom: 2px solid var(--color-black);
  font-weight: 500;
`;

const Form = styled.form`
  width: 100%;
  padding: 1rem 0;
`;

const OrderSummary = ({ totalPrice }) => {
  const [isTerms, setIsTerms] = useState(false);
  return (
    <Group direction="column">
      <Group direction="column">
        <Title>ORDER SUMMARY</Title>
        <Group
          justifyContent="space-between"
          alignItems="center"
          margin="1rem 0"
        >
          <Text fontSize="1.2" weight="400">
            Total:
          </Text>
          <Text fontSize="1.2" weight="600">
            {currencyFormat(totalPrice)}
          </Text>
        </Group>
      </Group>
      <Grid lgCol={2} col={1} gap={20}>
        <Form>
          <Text fontSize="1.1" weight="400">
            Get Shipping Estimates
          </Text>
          <Select
            padding
            block
            data={["Azerbaijany", "Turkey", "United States"]}
          />
          <Select padding block data={["Sabirabad", "Baku", "Shirvan"]} />
          <Input block placeholder="ZIP Code" />
          <Button href="/cart" block outlinePrimary>
            Calculate Shipping
          </Button>
        </Form>
        <Form>
          <Text fontSize="1.1" weight="400">
            Coupon Code:
          </Text>
          <Input block />
          <Group margin="1.2rem 0" alignItems="center">
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
          <Button disabled={!isTerms} href="checkout" block primary>
            Proceed to Checkout
          </Button>
          <Button href="/products" block outlinePrimary>
            Continue Shopping
          </Button>
        </Form>
      </Grid>
    </Group>
  );
};

export default OrderSummary;
