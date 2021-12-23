import React from "react";
import styled from "styled-components";
import { paymentMethods } from "../../config";
import Text from "../tools/Text";

const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  @media (max-width: 762px) {
    margin-top: 1rem;
    flex-direction: column;
  }
`;

const PaymentMethods = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 762px) {
    margin-top: 1rem;
  }
`;
const Img = styled.img`
  height: 1.6rem;
  object-fit: cover;
`;
const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <CopyrightWrapper>
      <Text>© {year} Electronry. Prepared by Ali Gulmaliyev</Text>
      <PaymentMethods>
        {paymentMethods.map((payment) => (
          <Img key={payment.id} src={payment.icon} alt={payment.name} />
        ))}
      </PaymentMethods>
    </CopyrightWrapper>
  );
};

export default Copyright;
