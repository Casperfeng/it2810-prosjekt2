import React from 'react';
import BurgerMenu from './BurgerMenu';
import renderer from 'react-test-renderer';

it('renders correctly when unclicked', () => {
  const tree = renderer
    .create(<BurgerMenu clicked={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when clicked', () => {
  const tree = renderer
    .create(<BurgerMenu clicked={true} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});



