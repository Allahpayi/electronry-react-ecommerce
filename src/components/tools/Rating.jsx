import React from "react";
import styled from "styled-components";

const ProductRating = styled.div`
  font-size: 0.8rem;
`;
const Start = styled.i`
margin-right: .1rem;
color: ${(props) => (props.empty ? "var(--color-gray)" : "#ffe234")};
`;

const Rating = () => {
  return (
    <div>
      <ProductRating>
        <Start className="fas fa-star" />
        <Start className="fas fa-star" />
        <Start className="fas fa-star" />
        <Start className="fas fa-star" />
        <Start empty className="fas fa-star" />
      </ProductRating>
    </div>
  );
};

export default Rating;
