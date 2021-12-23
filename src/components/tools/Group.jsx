import React from "react";
import styled from "styled-components";

const GroupContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.direction};

  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  z-index: ${(props) => props.zIndex};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
`;

const Group = ({
  children,
  alignItems,
  justifyContent,
  direction,
  position,
  top,
  left,
  right,
  bottom,
  zIndex,
  margin,
  padding,
  width,
}) => {
  return (
    <GroupContainer
      alignItems={alignItems}
      justifyContent={justifyContent}
      direction={direction}
      position={position}
      top={top}
      left={left}
      bottom={bottom}
      right={right}
      zIndex={zIndex}
      margin={margin}
      padding={padding}
      width={width}
    >
      {children}
    </GroupContainer>
  );
};

export default Group;
