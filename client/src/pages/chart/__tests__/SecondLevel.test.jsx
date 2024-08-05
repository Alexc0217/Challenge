import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';
import SecondLevel from '../SecondLevel';
import { GET_EMPLOYEE_SECOND_LEVEL } from '../../../graphql/employeeQueries';
import { EMPLOYEE } from '../../../navigation/routes';

const mocks = [
  {
    request: {
      query: GET_EMPLOYEE_SECOND_LEVEL,
      variables: { id: '1' },
    },
    result: {
      data: {
        employee: {
          id: '1',
          name: 'Alex',
          subordinates: [
            {
              id: '2', 
              name: 'Alex Costa' ,
              subordinates: [
                {
                  id: '5',
                  name: 'Bruno Souza',
                },
                {
                  id: '6',
                  name: 'Bruna Souza',
                }
              ],
            },
            {
              id: '3', 
              name: 'Alex Moura',
              subordinates: [
                {
                  id: '5',
                  name: 'Bruno Souza',
                },
                {
                  id: '6',
                  name: 'Bruna Souza',
                }
              ],
            },
          ],
        },
      },
    },
  },
];

describe('SecondLevel Component Snapshot', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={[EMPLOYEE.SECOND_LEVEL, {id: 1}]}>
          <SecondLevel />
        </MemoryRouter>
      </MockedProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
