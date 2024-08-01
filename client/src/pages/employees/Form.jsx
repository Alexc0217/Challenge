import {React, useState} from "react";
import { useMutation } from '@apollo/client';
import {SwalError, SwalSuccess } from "../../components/ui"
import { CREATE_EMPLOYEE } from "../../graphQL/employee_queries";
import { useParams } from "react-router-dom";
import { Button, CircularProgress } from "@mui/material";
import { DivForm, FormStyled } from "../../components/ui/styles";
import { CustomInput } from "../../components/ui/CustomInput";

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const { company_id } = useParams();

  const [createEmployee, {data, loading, error}] = useMutation(CREATE_EMPLOYEE, {
    onCompleted: (response) => {
      const data = response.createEmployee;
      
      if(data.errors.length > 0) return SwalError(data.errors);
      SwalSuccess({message: data.message, redirect: `/companies/${company_id}`});
    },
    onError: (error) => {
      SwalError(error.message);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createEmployee({ variables: { name, email, role, companyId: company_id } });
  };

  if (loading) return <CircularProgress />;

  return (
    <DivForm>
      <FormStyled onSubmit={handleSubmit}>
        <CustomInput 
          name={name} 
          onChange={(e) => setName(e.target.value)} 
          label="Nome" 
          placeholder="Nome" 
          required 
        />
        <CustomInput 
          name={email} 
          onChange={(e) => setEmail(e.target.value)} 
          label="E-mail" 
          placeholder="E-mail" 
          type="email" 
          required
          error={(err) => setInvalidEmail(err)}
        />
        <CustomInput 
          name={role} 
          onChange={(e) => setRole(e.target.value)} 
          label="Cargo" 
          placeholder="Cargo" 
        />
        <Button type="submit" variant="contained" color="success" disabled={invalidEmail}>Criar Colaborador</Button>
      </FormStyled>
    </DivForm>
  );
}

export default Form;
