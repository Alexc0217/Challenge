import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import EmployeeCard from '../EmployeeCard';
import { MemoryRouter } from 'react-router-dom';
import { UPDATE_EMPLOYEE_MANAGER, DELETE_EMPLOYEE } from '../../../graphQL/employeeQueries';

const mocks = [
  {
    request: {
      query: UPDATE_EMPLOYEE_MANAGER,
      variables: { employeeId: '1', managerId: '2' },
    },
    result: {
      data: {
        updateEmployeeManager: { errors: [], message: 'Manager updated successfully' },
      },
    },
  },
  {
    request: {
      query: DELETE_EMPLOYEE,
      variables: { id: '1' },
    },
    result: {
      data: {
        deleteEmployee: { errors: [], message: 'Employee deleted successfully' },
      },
    },
  },
];

const employee = {
  id: '1',
  name: 'Alex Moura',
  email: 'alex.moura@outlook.com',
  role: 'Developer',
  managerId: '2',
};

const employees = [
  { id: '1', name: 'Bruno Souza' },
  { id: '2', name: 'Bruna Souza' },
];

describe('EmployeeCard Component Snapshot', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <EmployeeCard employee={employee} employees={employees} />
        </MemoryRouter>
      </MockedProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
