import React from "react";
import styled from "styled-components";
import { sosial } from "../../config";

const SosialList = styled.ul`
  display: flex;
  margin-top: 0.5rem;
`;

const SosialListItem = styled.li`
  padding: 1rem;
  &:first-of-type {
    padding-left: 0;
  }
  &:last-of-type {
    padding-right: 0;
  }
`;
const SosialIcon = styled.i``;
const SosialLink = styled.a`
  color: var(--color-black);
  transition: color 0.3s ease;
  &:hover {
    color: var(--color-red);
  }
`;

const SosialIcons = () => {
  return (
    <SosialList className="social-icons">
      {sosial.map((item) => (
        <SosialListItem key={item.id}>
          <SosialLink
            href={item.link}
            title={item.name}
            target="_blank"
            rel="noreferrer"
          >
            <SosialIcon className={item.icon}></SosialIcon>
          </SosialLink>
        </SosialListItem>
      ))}
    </SosialList>
  );
};

export default SosialIcons;
