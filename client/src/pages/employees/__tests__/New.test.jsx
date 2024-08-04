import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';
import New from '../New';
import { GET_COMPANY } from '../../../graphQL/companyQueries';
import { EMPLOYEE } from '../../../navigation/routes';
import { pathWithParams } from '../../../utils/pathWithParams';

const mocks = [
  {
    request: {
      query: GET_COMPANY,
      variables: { id: '1' },
    },
    result: {
      data: {
        company: {
          name: 'Qulture Rocks',
          id: '1'
        },
        message: "",
        errors: [],
      },
    },
  },
];

describe('New Component Snapshot', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={[pathWithParams(EMPLOYEE.NEW, {company_id: '1'})]}>
          <New />
        </MemoryRouter>
      </MockedProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
