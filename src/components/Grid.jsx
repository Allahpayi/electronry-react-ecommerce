import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.lgCol}, 1fr);
  gap: ${(props) => props.gap}px;
  margin: ${(props) => props.gap}px 0;
  &:last-of-type{
    margin-bottom: 0;
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(${(props) => props.mdCol}, 1fr);
  }
  @media (max-width: 762px) {
    grid-template-columns: repeat(${(props) => props.col}, 1fr);
  }
`;

const Grid = ({ children, col, mdCol, lgCol, gap }) => {
  return (
    <GridContainer col={col} mdCol={mdCol} lgCol={lgCol} gap={gap}>
      {children}
    </GridContainer>
  );
};

export default Grid;
