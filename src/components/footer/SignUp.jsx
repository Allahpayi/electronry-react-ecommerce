import React from "react";
import styled from "styled-components";

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
const Input = styled.input`
  padding: 0.8rem 1.4rem;
  margin-right: 1rem;
  width: 100%;
  border-radius: 0.2rem;
  border: 1px solid var(--border-color);
  background-color: var(--color-main);
  cursor: text;
  @media (max-width: 762px) {
    margin-bottom: .8rem;
  }
`;
const Button = styled.button`
  padding: 0.8rem 1.4rem;
  border-radius: 0.2rem;
  border: 1px solid var(--color-red);
  font-weight: 600;
  background-color: var(--color-red);
  color: var(--color-main);
  transition: all 0.3s ease;
  &:hover {
    color: var(--color-red);
    background-color: transparent;
  }
  @media (max-width: 762px) {
    width: max-content;
    margin: auto;
  }
`;

const SignUp = () => {
  return (
    <Form>
      <Title>SIGN UP FOR OUR NEWSLETTER</Title>
      <Text>Receive our latest updates about our products and promotions.</Text>
      <Group>
        <Input type="text" placeholder="enter your email address" />
        <Button>Submit</Button>
      </Group>
    </Form>
  );
};

export default SignUp;
