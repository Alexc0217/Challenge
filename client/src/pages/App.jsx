import React from 'react'
import { gql, useQuery } from '@apollo/client';
import { Main } from "../components/ui/styles";
import Chart from '../components/ui/Chart';
import RouterConfig from '../navigation/RouterConfig';
import "../index.css";

const GET_EMPLOYEES = gql`
    {
      employee(id: 1){
        name
        subordinates{
          name
          id
          email
          role
          subordinates{
            id
            name
            email
            role
          }
        }
      }
    }
  `

function App() {

  const {loading, error, data} = useQuery(GET_EMPLOYEES, {
    pollInterval: 3000,
  });

  if(loading) return "loading...";
  if(error) return `Error: ${error.message}`

  return (
    <>
      <RouterConfig />
      {/* <Chart employee={data?.employee} /> */}
    </>

  );
}

export default App;
