import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.lgCol}, 1fr);
  gap: ${(props) => props.gap}px;
  margin: ${(props) => props.gap}px
    ${(props) => (props.margin ? props.margin + "px" : "0px")};
  &:last-of-type {
    margin-bottom: 0;
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(${(props) => props.mdCol}, 1fr);
  }
  @media (max-width: 762px) {
    grid-template-columns: repeat(${(props) => props.col}, 1fr);
    overflow-x: ${(props) => (props.scroll ? "scroll" : "none")};
  }
`;

const Grid = ({ children, col, mdCol, lgCol, gap, scroll, margin }) => {
  return (
    <GridContainer
      scroll={scroll}
      col={col}
      mdCol={mdCol}
      lgCol={lgCol}
      gap={gap}
      margin={margin}
    >
      {children}
    </GridContainer>
  );
};

export default Grid;
