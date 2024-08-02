import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Image } from "../../components/ui/styles";
import UserIcon from "../../assets/images/UserIcon.png"
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
        <ActionButton variant="contained" size="small" onClick={() => navigate(`/employees/pairs/${employee.id}`)}>
          Ver colaboradores do mesmo nível
        </ActionButton>
        <ActionButton variant="contained" size="small" onClick={() => navigate(`/employees/subordinates/${employee.id}`)}>
          Ver liderados
        </ActionButton>
        <ActionButton variant="contained" size="small" onClick={() => navigate(`/employees/subordinates-second-level/${employee.id}`)}>
          Ver liderados dos liderados
        </ActionButton>
        <ActionButton variant="contained" type="danger" size="small" onClick={() => (deleteEmployee({variables: {id: employee.id}}))}>
          Apagar colaborador
        </ActionButton>
      </EmployeeActions>
    </CardEmployee>
  )
}