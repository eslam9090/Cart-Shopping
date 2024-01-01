import React, { Children } from "react";
import Container from "react-bootstrap/esm/Container";

const Containeer = ({ Children }) => {
  return (
    <div>
      <Container>{Children}</Container>
    </div>
  );
};

export default Containeer;
