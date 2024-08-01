import {React, useState} from "react";
import { useMutation } from '@apollo/client';
import {SwalError, SwalSuccess } from "../../components/ui"
import { CREATE_COMPANY } from "../../graphQL/company_queries";
import { Button, CircularProgress } from "@mui/material";
import { Container, DivForm, FormStyled } from "../../components/ui/styles";
import { CustomInput } from "../../components/ui/CustomInput";

function Form() {
  const [name, setName] = useState('');

  const [createCompany, {data, loading, error}] = useMutation(CREATE_COMPANY, {
    onCompleted: (response) => {
      const data = response.createCompany;

      if(data.errors.length > 0) return SwalError(data);
      SwalSuccess({message: data.message, redirect: "/companies"});
    },
    onError: (error) => {
      SwalError(error.message);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createCompany({ variables: { name } });
  };

  if (loading) return <CircularProgress />;

  return (
    <DivForm>
      <FormStyled onSubmit={handleSubmit}>
        <CustomInput 
          name={name} 
          onChange={(e) => setName(e.target.value)} 
          label="Nome da empresa" 
          placeholder="Nome da empresa" 
          required 
        />
        <Button type="submit" variant="contained" color="success">Criar empresa</Button>
      </FormStyled>
    </DivForm>  
  );
}

export default Form;
