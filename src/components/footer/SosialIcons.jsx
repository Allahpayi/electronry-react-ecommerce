import React from "react";
import styled from "styled-components";

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
      <SosialListItem>
        <SosialLink
          href="http://facebook.com/electronry"
          title="Facebook"
          target="_blank"
          rel="noreferrer"
        >
          <SosialIcon className="fab fa-facebook-f"></SosialIcon>
        </SosialLink>
      </SosialListItem>

      <SosialListItem>
        <SosialLink
          href="http://twitter.com/electronry"
          title="Twitter"
          target="_blank"
          rel="noreferrer"
        >
          <SosialIcon className="fab fa-twitter"></SosialIcon>
        </SosialLink>
      </SosialListItem>

      <SosialListItem>
        <SosialLink
          href="http://instagram.com/electronry"
          title="Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <SosialIcon className="fab fa-instagram"></SosialIcon>
        </SosialLink>
      </SosialListItem>
      <SosialListItem>
        <SosialLink
          href="https://pinterest.com/electronry"
          title="Pinterest"
          target="_blank"
          rel="noreferrer"
        >
          <SosialIcon className="fab fa-pinterest-p"></SosialIcon>
        </SosialLink>
      </SosialListItem>

      <SosialListItem>
        <SosialLink
          href="https://www.youtube.com/electronry"
          title="YouTube"
          target="_blank"
          rel="noreferrer"
        >
          <SosialIcon className="fab fa-youtube"></SosialIcon>
        </SosialLink>
      </SosialListItem>
    </SosialList>
  );
};

export default SosialIcons;
