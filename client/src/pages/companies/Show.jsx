import React from "react";
import { CompanyBox, 
  SideBar,
  Content,
  Employees,
  EmployeesTitle,
  EmployeesBox,
  CardEmployee,
  CompanyName,
  CardRight,
  EmployeePicture,
  EmployeeInfos,
  Label,
  EmployeeActions,
  ActionButton,
  EmptyEmployees
} from "./styles";
import Button from '@mui/material/Button';
import { CircularProgress, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation } from '@apollo/client';
import { COMPANY_EMPLOYEES, UPDATE_EMPLOYEE_MANAGER } from "../../graphQL/company_queries";
import { Image } from "../../components/ui/styles";
import UserIcon from "../../assets/images/UserIcon.png"
import {SwalError, SwalSuccess } from "../../components/ui";
import { DELETE_EMPLOYEE } from "../../graphQL/employee_queries";

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

  const handleManagerChange = (employeeId, newManagerId) => {
    updateManager({ variables: { employeeId, managerId: newManagerId } });
  };


  if(loading){
    return <CircularProgress />
  }

  if(error){ 
    SwalError(error.message);
  }

  function renderEmployees(){
    return data.companyEmployees.employees.map((employee) => (
      <CardEmployee key={employee.id}>
        <CardRight>
          <EmployeePicture>
            <Image src={UserIcon}/>
          </EmployeePicture>
          <EmployeeInfos>
            <Label>Nome: {employee.name}</Label>
            <Label>E-mail: {employee.email}</Label>
            <Label>Cargo: {employee.role || "Sem cargo"}</Label>
            <FormControl fullWidth variant="outlined" size="small" style={{ marginTop: '8px' }}>
              <InputLabel>Selecione o Gestor</InputLabel>
              <Select
                label="Selecione o Gestor"
                value={employee.managerId || ''}
                onChange={(e) => handleManagerChange(employee.id, e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {data.companyEmployees.employees
                  .filter((emp) => emp.id !== employee.id)
                  .map((manager) => (
                    <MenuItem key={manager.id} value={manager.id}>
                      {manager.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </EmployeeInfos>
        </CardRight>
        <EmployeeActions>
          <ActionButton variant="contained" size="small">
            Ver colaboradores do mesmo nível
          </ActionButton>
          <ActionButton variant="contained" size="small">
            Ver liderados
          </ActionButton>
          <ActionButton variant="contained" size="small">
            Ver liderados dos liderados
          </ActionButton>
          <ActionButton variant="contained" size="small" onClick={() => (deleteEmployee({variables: {id: employee.id}}))}>
            Apagar colaborador
          </ActionButton>
        </EmployeeActions>
      </CardEmployee>
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
          <EmployeesTitle>Employees</EmployeesTitle>
          <Link to={`/employees/new/${id}`}>
            <Button variant="contained" size="large">Adicionar novo colaborador</Button>
          </Link>
        </Employees>
        <EmployeesBox>
          {data.companyEmployees.employees.length > 0 ? renderEmployees() : (<EmptyEmployees>Não há colaboradores cadastrado nessa empresa.</EmptyEmployees>)}
        </EmployeesBox>
      </Content>
    </CompanyBox>
  )
}