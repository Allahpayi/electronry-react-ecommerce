import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, 1fr);
  gap: ${(props) => props.gap}px;
  margin: ${(props) => props.gap}px
    ${(props) => (props.margin ? props.margin + "px" : "0px")};
  &:last-of-type {
    margin-bottom: 0;
  }
  overflow-x: ${(props) => (props.scroll ? "auto" : "none")};
  @media (min-width: 576px) {
    grid-template-columns: repeat(${(props) => props.smCol}, 1fr);
  }
  @media (min-width: 762px) {
    grid-template-columns: repeat(${(props) => props.mdCol}, 1fr);

  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(${(props) => props.lgCol}, 1fr);
  }
`;

const Grid = ({ children, col, smCol, mdCol, lgCol, gap, scroll, margin }) => {
  return (
    <GridContainer
      scroll={scroll}
      col={col}
      smCol={smCol}
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
