import { gql } from '@apollo/client';

export const GET_COMPANY = (id) => gql`
  {
    company(id: ${id}){
      name
      id
    }
  }
`

export const CREATE_COMPANY = gql`
  mutation CreateCompany($name: String!) {
    createCompany(input: { name: $name }) {
      company {
        id
        name
      }
      errors
    }
  }
`;

export const COMPANIES = gql`
  {
   companies{
      id
      name
      employeesNumber
    }  
  }
`

export const COMPANY_EMPLOYEES = (id) => gql`
  {
    companyEmployees(companyId: ${id}){
      companyName
      employees{
        name
        id
        role
        email
        managerId
      }
    }
  }
`

export const UPDATE_EMPLOYEE_MANAGER = gql`
  mutation UpdateEmployeeManager($employeeId: ID!, $managerId: ID!) {
    updateEmployeeManager(input: {employeeId: $employeeId, managerId: $managerId}) {
      employee{
        name
        id
      }
      message
      errors
    }
  }
`;