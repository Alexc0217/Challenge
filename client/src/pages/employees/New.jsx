import React from "react";
import Form from "./Form";
import { useQuery } from '@apollo/client';
import { GET_COMPANY } from "../../graphQL/company_queries";
import { SwalError } from "../../components/ui"
import { Container } from "../../components/ui/styles";
import { BoxForm } from "../../components/ui/styles";
import { useParams } from "react-router-dom";
import Loading from "../../components/ui/Loading";

function New(){
  const {company_id} = useParams();
  const {loading, error, data} = useQuery(GET_COMPANY(company_id), {
    pollInterval: 3000,
  });

  if (loading) return <Loading />;
  if (error) return SwalError(error.message);

  return (
    <Container>
      {data.company && (
        <h1>
          {data.company.name}
        </h1>
      )}
      <BoxForm>
        <Form />
      </BoxForm>
    </Container>
  )
}

export default New;