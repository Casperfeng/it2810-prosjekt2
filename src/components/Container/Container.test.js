import React from 'react';
import Container from './Container';
import renderer from 'react-test-renderer';

it('renders Container correctly', () => {
  const tree = renderer
    .create(<Container />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});



