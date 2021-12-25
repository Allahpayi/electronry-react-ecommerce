import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Text from "../components/tools/Text";
import Helmet from "../components/Helmet";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
const NotFound = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");
  return (
    <Helmet title="Not Found">
      <Container>
        <Text fontSize="3">The {path.toUpperCase()} page is Not Found</Text>
      </Container>
    </Helmet>
  );
};

export default NotFound;
