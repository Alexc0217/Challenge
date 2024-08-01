import {React, useState} from "react";
import { useMutation } from '@apollo/client';
import {SwalError, SwalSuccess } from "../../components/ui"
import { CREATE_COMPANY } from "../../graphQL/company_queries";

function Form() {
  const [name, setName] = useState('');

  const [createCompany, {data, loading, error}] = useMutation(CREATE_COMPANY, {
    onCompleted: (response) => {
      const data = response.createCompany;
      
      if(data.errors.length > 0) return SwalError(data.errors);
      SwalSuccess(data.message);
    },
    onError: (error) => {
      SwalError(error.message);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createCompany({ variables: { name } });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p>Error: {error.message}</p>}
      {data?.createCompany.company && (
        <p>
          Company created: {data.createCompany.company.name} (
          {data.createCompany.company.id})
        </p>
      )}
    </div>
  );
}

export default Form;
