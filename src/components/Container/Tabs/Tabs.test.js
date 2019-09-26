import React from 'react';
import Tabs from './Tabs';
import renderer from 'react-test-renderer';

it('renders Container correctly', () => {
  const tree = renderer
    .create(<Tabs />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});