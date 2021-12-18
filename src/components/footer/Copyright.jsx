import React from "react";
import styled from "styled-components";
import { paymentMethods } from "../../config";
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
const Text = styled.p`
  font-size: 0.9rem;
  color: var(--color-black2);
  @media (max-width: 762px) {
    text-align: center;
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
const Icon = styled.img`
  height: 1.6rem;
  object-fit: cover;
`;
const Copyright = () => {
  const year = new Date().getFullYear()
  return (
    <CopyrightWrapper>
      <Text>
        © {year} Electronry. All Rights Reserved. Powered by
        Ali Gulmaliyov.
      </Text>
      <PaymentMethods>
        {paymentMethods.map((payment) => (
          <Icon key={payment.id} src={payment.icon} alt={payment.name} />
        ))}
      </PaymentMethods>
    </CopyrightWrapper>
  );
};

export default Copyright;
