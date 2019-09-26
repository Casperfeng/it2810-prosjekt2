import React from 'react';
import SideNav from './SideNav';
import renderer from 'react-test-renderer';

it('renders SideNav correctly', () => {
  const tree = renderer.create(<SideNav />).toJSON();
  expect(tree).toMatchSnapshot();
});
