import { React, useCallback } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Image } from "../../components/ui/styles";
import UserIcon from "../../assets/images/UserIcon.png"
import { DELETE_EMPLOYEE } from "../../graphQL/employee_queries";
import { useMutation } from '@apollo/client';
import { UPDATE_EMPLOYEE_MANAGER } from "../../graphQL/employee_queries";
import {SwalError, SwalSuccess } from "../../components/ui";
import { EMPLOYEE } from "../../navigation/routes";
import { pathWithParams } from "../../utils/pathWithParams";
import {
  CardEmployee,
  CardRight,
  EmployeePicture,
  EmployeeInfos,
  Label,
  EmployeeActions,
  ActionButton,
} from "./styles";

export default function EmployeeCard({employee, employees}){
  let navigate = useNavigate();

  const [updateManager] = useMutation(UPDATE_EMPLOYEE_MANAGER, {
    onCompleted: (response) => {
      const data = response.updateEmployeeManager;
      
      if(data.errors.length > 0) return SwalError(data.errors);
      SwalSuccess({message: data.message});
    }, 
    onError: (error) => {
      SwalError(error.message);
    }
  });

  const [deleteEmployee] = useMutation(DELETE_EMPLOYEE, {
    onCompleted: (response) => {
      const data = response.deleteEmployee;

      if(data.errors.length > 0) return SwalError(data.errors);
      SwalSuccess({message: data.message});
    },
    onError: (error) => {
      SwalError(error.message);
    }
  })
  
  const handleManagerChange = useCallback((employeeId, newManagerId) => {
    updateManager({ variables: { employeeId, managerId: newManagerId } });
  }, [updateManager]);

  return(
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
              {employees
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
        <ActionButton variant="contained" size="small" onClick={() => navigate(pathWithParams(EMPLOYEE.PAIRS, {id: employee.id}))}>
          Ver colaboradores do mesmo nível
        </ActionButton>
        <ActionButton variant="contained" size="small" onClick={() => navigate(pathWithParams(EMPLOYEE.SUBORDINATES, {id: employee.id}))}>
          Ver liderados
        </ActionButton>
        <ActionButton variant="contained" size="small" onClick={() => navigate(pathWithParams(EMPLOYEE.SECOND_LEVEL, {id: employee.id}))}>
          Ver liderados dos liderados
        </ActionButton>
        <ActionButton variant="contained" type="danger" size="small" onClick={() => (deleteEmployee({variables: {id: employee.id}}))}>
          Apagar colaborador
        </ActionButton>
      </EmployeeActions>
    </CardEmployee>
  )
}