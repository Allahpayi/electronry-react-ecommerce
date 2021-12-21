import React from "react";
import styled from "styled-components";
import Button from "../form-elements/Button";
import Input from "../form-elements/Input";

const Form = styled.form`
  width: max-content;
  text-align: center;
  margin: auto;
  @media (max-width: 762px) {
    width: auto;
  }
`;
const Title = styled.h2`
  margin-bottom: 0.4rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-black);
`;
const Text = styled.p`
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
  color: var(--color-black2);
`;
const Group = styled.div`
  display: flex;
  @media (max-width: 762px) {
    flex-direction: column;
  }
`;
const SignUp = () => {
  return (
    <Form>
      <Title>SIGN UP FOR OUR NEWSLETTER</Title>
      <Text>Receive our latest updates about our products and promotions.</Text>
      <Group>
        <Input block placeholder="enter your email address" />
        <Button primary href="/">Submit</Button>
      </Group>
    </Form>
  );
};

export default SignUp;
