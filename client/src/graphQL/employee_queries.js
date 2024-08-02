import { gql } from '@apollo/client';

export const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee($name: String!, $email: String!, $role: String!, $companyId: ID!){
    createEmployee(input: {name: $name, email: $email, role: $role, companyId: $companyId}){
      employee{
        name
        email
        role
      }
      message
      errors
    }
  }
`

export const DELETE_EMPLOYEE = gql`
  mutation DeleteEmployee($id: ID!){
    deleteEmployee(input: {id: $id}){
      employee{
        name
        id
      }
      message
      errors
    }
  }
`

export const GET_EMPLOYEE_PAIRS = (id) => gql`
  {
    employee(id: ${id}){
      name
      id
      role
      pairs{
        name
        id
        role
      }
    }
  }
`

export const GET_EMPLOYEE_SUBORDINATES = (id) => gql`
  {
    employee(id: ${id}){
      name
      id
      role
      subordinates{
        name
        id
        role
      }
    }
  }
`

export const GET_EMPLOYEE_SECOND_LEVEL = (id) => gql`
  {
    employee(id: ${id}){
      name
      subordinates{
        name
        id
        email
        role
        subordinates{
          id
          name
          email
          role
        }
      }
    }
  }
`