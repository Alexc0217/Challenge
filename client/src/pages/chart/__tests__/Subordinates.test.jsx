import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';
import Subordinates from '../Subordinates';
import { GET_EMPLOYEE_SUBORDINATES } from '../../../graphql/employeeQueries';
import { EMPLOYEE } from '../../../navigation/routes';
import { pathWithParams } from '../../../utils/pathWithParams';

const mocks = [
  {
    request: {
      query: GET_EMPLOYEE_SUBORDINATES,
      variables: { id: '1' },
    },
    result: {
      data: {
        employee: {
          id: '1',
          name: 'John Doe',
          subordinates: [
            { id: '2', name: 'Alex Costa' },
            { id: '3', name: 'Alex Moura' },
          ],
        },
      },
    },
  },
];

describe('Subordinates Component Snapshot', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={[pathWithParams(EMPLOYEE.SUBORDINATES, {id: 1})]}>
          <Subordinates />
        </MemoryRouter>
      </MockedProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
