import React from 'react';
import HistoryMenu from './HistoryMenu';
import renderer from 'react-test-renderer';

it('renders correctly when unclicked', () => {
  const tree = renderer.create(<HistoryMenu />).toJSON();
  expect(tree).toMatchSnapshot();
});
