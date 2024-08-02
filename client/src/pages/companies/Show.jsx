import { React, useCallback} from "react";
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
import { useQuery, useMutation } from '@apollo/client';
import { COMPANY_EMPLOYEES, UPDATE_EMPLOYEE_MANAGER } from "../../graphQL/company_queries";
import {SwalError, SwalSuccess } from "../../components/ui";
import { DELETE_EMPLOYEE } from "../../graphQL/employee_queries";
import Loading from "../../components/ui/Loading";
import EmployeeCard from "./EmployeeCard";

export default function Show(){
  const { id } = useParams();

  const {loading, error, data} = useQuery(COMPANY_EMPLOYEES(id), {
    pollInterval: 3000,
  });

  const [updateManager] = useMutation(UPDATE_EMPLOYEE_MANAGER, {
    onCompleted: (response) => {
      const data = response.updateEmployeeManager;
      
      if(data.errors.length > 0) return SwalError(data.errors);
      SwalSuccess(data.message);
    }, 
    onError: (error) => {
      SwalError(error.message);
    }
  });

  const [deleteEmployee] = useMutation(DELETE_EMPLOYEE, {
    onCompleted: (response) => {
      const data = response.deleteEmployee;

      if(data.errors.length > 0) return SwalError(data.errors);
      SwalSuccess(data.message);
    },
    onError: (error) => {
      SwalError(error.message);
    }
  })

  const handleManagerChange = useCallback((employeeId, newManagerId) => {
    updateManager({ variables: { employeeId, managerId: newManagerId } });
  }, [updateManager]);
  
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
          <Link to={`/employees/new/${id}`}>
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