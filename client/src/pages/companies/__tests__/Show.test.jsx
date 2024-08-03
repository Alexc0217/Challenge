import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';
import Show from '../Show';
import { COMPANY_EMPLOYEES } from '../../../graphQL/companyQueries';
import { pathWithParams } from '../../../utils/pathWithParams';
import { COMPANY } from '../../../navigation/routes';

const mocks = [
  {
    request: {
      query: COMPANY_EMPLOYEES,
      variables: { id: '1' }, 
    },
    result: {
      data: {
        companyEmployees: {
          companyName: 'Qulture Rocks',
          employees: [
            { id: '1', name: 'Alex Moura', email: 'alex.moura@outlook.com', role: 'Developer', managerId: null },
            { id: '2', name: 'Alex Costa', email: 'alex.costa@outlook.com', role: 'Designer', managerId: '1' },
          ],
        },
      },
    },
  },
];

describe('Show Component Snapshot', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={[pathWithParams(COMPANY.SHOW, {id: 1})]}>
          <Show />
        </MemoryRouter>
      </MockedProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
