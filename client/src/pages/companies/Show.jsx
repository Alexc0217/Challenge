import { React } from "react";
import { CompanyBox, 
  SideBar,
  Content,
  Employees,
  EmployeesTitle,
  EmployeesBox,
  CompanyName,
  EmptyEmployees
} from "./styles";
import Button from '@mui/material/Button';
import { Link, useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { COMPANY_EMPLOYEES } from "../../graphQL/companyQueries";
import { SwalError } from "../../components/ui";
import { EMPLOYEE } from "../../navigation/routes";
import { pathWithParams } from "../../utils/pathWithParams";
import Loading from "../../components/ui/Loading";
import EmployeeCard from "./EmployeeCard";

export default function Show(){
  const { id } = useParams();

  const {loading, error, data} = useQuery(COMPANY_EMPLOYEES, {
    variables: {
      id: id,
    },
    pollInterval: 3000,
  });
  
  if(loading) return <Loading />

  if(error){ 
    SwalError(error.message);
  }

  function renderEmployees(){
    return data.companyEmployees.employees.map((employee) => (
      <EmployeeCard key={employee.id} employee={employee} employees={data.companyEmployees.employees} />
    ))
  };

  return(
    <CompanyBox>
      <SideBar>
        <CompanyName>
          {data.companyEmployees.companyName}
        </CompanyName>
      </SideBar>
      <Content>
        <Employees>
          <EmployeesTitle>Colaboradores ({data.companyEmployees.employees.length})</EmployeesTitle>
          <Link to={pathWithParams(EMPLOYEE.NEW, {company_id: id})}>
            <Button variant="contained" size="large">Adicionar novo colaborador</Button>
          </Link>
        </Employees>
        <EmployeesBox>
          {
            data.companyEmployees.employees.length > 0 ? renderEmployees() : (
              <EmptyEmployees>
                Não há colaboradores cadastrados nessa empresa.
              </EmptyEmployees>
            )
          }
        </EmployeesBox>
      </Content>
    </CompanyBox>
  )
}