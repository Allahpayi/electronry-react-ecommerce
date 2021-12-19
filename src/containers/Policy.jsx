import React from "react";
import PolicyCard from "../components/PolicyCard";
import Grid from '../components/Grid';
import { policies } from "../config";

const Policy = () => {
  return (
    <Grid col={1} mdCol={3} lgCol={3}>
      {policies.map((policy) => (
        <PolicyCard data={policy} />
      ))}
    </Grid>
  );
};

export default Policy;
