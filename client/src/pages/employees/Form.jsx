import {React, useState} from "react";
import { useMutation } from '@apollo/client';
import {SwalError, SwalSuccess } from "../../components/ui"
import { CREATE_EMPLOYEE } from "../../graphQL/employeeQueries";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { DivForm, FormStyled } from "../../components/ui/styles";
import { CustomInput } from "../../components/ui/CustomInput";
import Loading from "../../components/ui/Loading";
import { COMPANY } from "../../navigation/routes";
import { pathWithParams } from "../../utils/pathWithParams";

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
      SwalSuccess({message: data.message, redirect: pathWithParams(COMPANY.SHOW, {id: company_id}) });
    },
    onError: (error) => {
      SwalError(error.message);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createEmployee({ variables: { name, email, role, companyId: company_id } });
  };

  if (loading) return <Loading />;

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
        <Button type="submit" variant="contained" color="success" disabled={invalidEmail} id="submit">Criar Colaborador</Button>
      </FormStyled>
    </DivForm>
  );
}

export default Form;
