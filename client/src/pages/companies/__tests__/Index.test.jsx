import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import Index from '../Index';
import { COMPANIES } from '../../../graphql/companyQueries';

const mocks = [
  {
    request: {
      query: COMPANIES,
    },
    result: {
      data: {
        companies: [
          { id: '1', name: 'Qulture Rocks' },
          { id: '2', name: 'Uol EdTech' },
        ],
      },
    },
  },
];

describe('Index Component Snapshot', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Index />
      </MockedProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
