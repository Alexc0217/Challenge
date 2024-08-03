import {React, useState} from "react";
import { useMutation } from '@apollo/client';
import {SwalError, SwalSuccess } from "../../components/ui"
import { CREATE_COMPANY } from "../../graphQL/company_queries";
import { Button } from "@mui/material";
import { DivForm, FormStyled } from "../../components/ui/styles";
import { CustomInput } from "../../components/ui/CustomInput";
import Loading from "../../components/ui/Loading";
import { COMPANY } from "../../navigation/routes";

function Form() {
  const [name, setName] = useState('');

  const [createCompany, {data, loading, error}] = useMutation(CREATE_COMPANY, {
    onCompleted: (response) => {
      const data = response.createCompany;

      if(data.errors.length > 0) return SwalError(data);
      SwalSuccess({message: data.message, redirect: COMPANY.INDEX});
    },
    onError: (error) => {
      SwalError(error.message);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createCompany({ variables: { name } });
  };

  if (loading) return <Loading />;

  return (
    <DivForm>
      <FormStyled onSubmit={handleSubmit}>
        <CustomInput 
          name={"name"}
          id={"name"}
          onChange={(e) => setName(e.target.value)} 
          label="Nome da empresa" 
          placeholder="Nome da empresa" 
          required 
        />
        <Button type="submit" variant="contained" color="success" id="submit">Criar empresa</Button>
      </FormStyled>
    </DivForm>  
  );
}

export default Form;
