import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import Form from '../Form';

describe('Form Component Snapshot', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(
      <MockedProvider mocks={[]} addTypename={false}>
        <Form />
      </MockedProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});