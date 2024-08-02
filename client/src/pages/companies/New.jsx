import React from "react";
import Form from "./Form";
import { Container, BoxForm } from "../../components/ui/styles";

function New(){

  return (
    <Container>
      <h1>
        Nova empresa
      </h1>
      <BoxForm>
        <Form />
      </BoxForm>
    </Container>
  )
}

export default New;