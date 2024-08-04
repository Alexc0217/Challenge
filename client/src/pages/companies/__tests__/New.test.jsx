import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import New from '../New';

describe('New Component Snapshot', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(
      <MockedProvider>
        <New />
      </MockedProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});