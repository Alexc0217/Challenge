import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { COMPANIES } from "../../graphQL/company_queries";
import Button from '@mui/material/Button';
import { CircularProgress } from "@mui/material";
import { View, DivButton, Main } from "./styles";
import Card from "../../components/ui/Card";
import Qulture from "../../assets/images/qulture.png";
import SwalError from "../../components/ui/SwalError";

function Index(){
  const {loading, error, data} = useQuery(COMPANIES, {
    pollInterval: 3000,
  });

  if(loading){
    return <CircularProgress />
  }

  if(error){ 
    SwalError(error.message);
  }

  function renderCards(){
    return data.companies.map((company) => (
      <Card title={company.name} image={Qulture} alt="Company Logo" id={company.id} />
    ))
  }

  return (
    <View>
      <DivButton>
        <Link to="/companies/new">
          <Button variant="contained" size="large">Criar nova empresa</Button>
        </Link>
      </DivButton>
      <Main>
        {
          !error && renderCards()
        }
      </Main>
    </View>
  )
}

export default Index;