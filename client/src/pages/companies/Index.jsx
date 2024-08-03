import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { COMPANIES } from "../../graphQL/companyQueries";
import Button from '@mui/material/Button';
import { View, DivButton, Main } from "./styles";
import Card from "../../components/ui/Card";
import Qulture from "../../assets/images/qulture.png";
import SwalError from "../../components/ui/SwalError";
import { Empty } from "../../components/ui/styles";
import Loading from "../../components/ui/Loading";
import { COMPANY } from "../../navigation/routes";

function Index(){
  const {loading, error, data} = useQuery(COMPANIES, {
    pollInterval: 3000,
  });

  if(loading) return <Loading />

  if(error){ 
    SwalError(error.message);
  }

  function renderCards(){
    return data.companies.map((company) => (
      <Card title={company.name} image={Qulture} alt="Company Logo" id={company.id} key={company.id} />
    ))
  }

  return (
    <View>
      <DivButton>
        <Link to={COMPANY.NEW}>
          <Button variant="contained" size="large">Criar nova empresa</Button>
        </Link>
      </DivButton>
      <Main>
        {
          !error && renderCards()
        }
      </Main>
      {
        data.companies.length < 1 && <Empty>Não há empresas. Crie uma nova.</Empty>
      }
    </View>
  )
}

export default Index;