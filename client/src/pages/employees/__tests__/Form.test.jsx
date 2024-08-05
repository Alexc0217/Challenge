import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';
import Form from '../Form';
import { CREATE_EMPLOYEE } from '../../../graphql/employeeQueries';
import { pathWithParams } from '../../../utils/pathWithParams';
import { EMPLOYEE } from '../../../navigation/routes';

const mocks = [
  {
    request: {
      query: CREATE_EMPLOYEE,
      variables: {
        name: 'Alex Moura',
        email: 'alex.moura@outlook.com',
        role: 'Developer',
        companyId: '1'
      },
    },
    result: {
      data: {
        createEmployee: {
          errors: [],
          message: 'Employee created successfully',
        },
      },
    },
  },
];

describe('Form Component Snapshot', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={[pathWithParams(EMPLOYEE.NEW, {id: 1})]}>
          <Form />
        </MemoryRouter>
      </MockedProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
