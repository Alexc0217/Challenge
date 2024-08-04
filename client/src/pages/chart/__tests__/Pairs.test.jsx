import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';
import Pairs from '../Pairs';
import { GET_EMPLOYEE_PAIRS } from '../../../graphQL/employeeQueries';
import { pathWithParams } from '../../../utils/pathWithParams';
import { EMPLOYEE } from '../../../navigation/routes';

const mocks = [
  {
    request: {
      query: GET_EMPLOYEE_PAIRS,
      variables: {
        id: "1",
      },
    },
    result: {
      data: {
        employee: {
          id: "1",
          name: "Alex Costa de Moura",
          pairs: [
            { id: "2", name: "Alex Moura", role: "Designer" },
            { id: "3", name: "Alex Costa", role: "Developer" },
          ],
        },
      },
    },
  },
];

describe('Pairs Component Snapshot', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={[pathWithParams(EMPLOYEE.PAIRS, {id: 1})]}>
          <Pairs />
        </MemoryRouter>
      </MockedProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
});