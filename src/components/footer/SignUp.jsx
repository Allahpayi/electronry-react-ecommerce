import React from "react";
import styled from "styled-components";
import Button from "../form-elements/Button";
import Input from "../form-elements/Input";
import Text from "../tools/Text";

const Form = styled.form`
  width: max-content;
  text-align: center;
  margin: auto;
  @media (max-width: 762px) {
    width: auto;
  }
`;
const FormGroup = styled.div`
  display: flex;
  @media (max-width: 762px) {
    flex-direction: column;
  }
`;
const SignUp = () => {
  return (
    <Form>
      <Text fontSize="1.4" weight="500">
        SIGN UP FOR OUR NEWSLETTER
      </Text>
      <Text margin=".4rem 0" weight="300">
        Receive our latest updates about our products and promotions.
      </Text>
      <FormGroup>
        <Input block placeholder="enter your email address" />
        <Button red href="/">
          Submit
        </Button>
      </FormGroup>
    </Form>
  );
};

export default SignUp;
