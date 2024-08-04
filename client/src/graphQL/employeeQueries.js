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

export const GET_EMPLOYEE_PAIRS = gql`
  query Employee($id: ID!){
    employee(id: $id){
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

export const GET_EMPLOYEE_SUBORDINATES = gql`
  query Employee($id: ID!){
    employee(id: $id){
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

export const GET_EMPLOYEE_SECOND_LEVEL = gql`
  query Employee($id: ID!){
    employee(id: $id){
      name
      id
      role
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