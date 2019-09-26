import React from 'react';
import Menu from './Menu';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Menu />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

