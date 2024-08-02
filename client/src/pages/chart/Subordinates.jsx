import React from "react";
import { Main } from "../../components/ui/styles";
import { useQuery } from '@apollo/client';
import { GET_EMPLOYEE_SUBORDINATES } from "../../graphQL/employee_queries";
import { useParams } from "react-router-dom";
import Chart from '../../components/ui/Chart';
import { SwalError } from "../../components/ui";
import Loading from "../../components/ui/Loading";

export default function Subordinates(){
  const { id } = useParams();

  const {loading, error, data} = useQuery(GET_EMPLOYEE_SUBORDINATES(id), {
    pollInterval: 3000,
  });

  if(loading) return <Loading />;
  if(error) return SwalError(error.message);

  return(
    <Main>
      <Chart employee={data?.employee} type="subordinates" />
    </Main>
  )
}
