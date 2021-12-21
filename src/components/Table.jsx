import React, { Fragment } from "react";
import styled from "styled-components";

const CustomTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  @media (max-width: 592px) {
    width: max-content;
  }
`;
const THead = styled.thead`
  background-color: var(--color-main2);
  color: var(--color-black);
`;
const TableRow = styled.tr``;
const Th = styled.th`
  padding: 1rem;
  text-align: left;
`;
const TableDescription = styled.td`
  padding: 1rem;
`;
const TBody = styled.tbody`
  & ${TableRow} {
    border: 1px solid var(--border-color);
  }
`;

export const Td = ({ children }) => {
  return <TableDescription>{children}</TableDescription>;
};

export const Tr = ({ children }) => {
  return <TableRow>{children}</TableRow>;
};

const Table = ({ thead, children }) => {
  return (
    <CustomTable>
      <THead>
        <Tr>
          {thead.map((th, index) => (
            <Th key={index}>{th}</Th>
          ))}
        </Tr>
      </THead>
      <TBody>
        {children.map((cartItem, index) => (
          <Fragment key={index}>{cartItem}</Fragment>
        ))}
      </TBody>
    </CustomTable>
  );
};

export default Table;
