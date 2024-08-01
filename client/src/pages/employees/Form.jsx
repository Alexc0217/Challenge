import {React, useState} from "react";
import { useQuery, useMutation } from '@apollo/client';
import {SwalError, SwalSuccess } from "../../components/ui"
import { CREATE_EMPLOYEE } from "../../graphQL/employee_queries";
import { GET_COMPANY } from "../../graphQL/company_queries";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const { company_id } = useParams();

  const {loading: companyLoading, error: companyError, data: companyData} = useQuery(GET_COMPANY(company_id), {
    pollInterval: 3000,
  });

  const [createEmployee, {data, loading, error}] = useMutation(CREATE_EMPLOYEE, {
    onCompleted: (response) => {
      const data = response.createEmployee;
      
      if(data.errors.length > 0) return SwalError(data.errors);
      SwalSuccess(data.message);
    },
    onError: (error) => {
      SwalError(error.message);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createEmployee({ variables: { name, email, role, companyId: company_id } });
  };

  if (companyLoading || loading) return <CircularProgress />;
  if (companyError) return SwalError(companyError.message);

  console.log(companyData)
  console.log(companyError)

  return (
    <div>
        {companyData.company.name}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>E-mail:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Cargo:</label>
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
          <label>Empresa:</label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p>Error: {error.message}</p>}
      {data?.createEmployee.employee && (
        <p>
          Employee created: {data.createEmployee.employee.name} 
        </p>
      )}
    </div>
  );
}

export default Form;
