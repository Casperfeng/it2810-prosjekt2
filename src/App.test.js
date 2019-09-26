import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

it('renders App correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('App loads header correctly', () => {
  const wrapper = Enzyme.mount(<App />);
  const header = wrapper.find("header");
  expect(header).toBeTruthy();
});

it('App loads container correctly', () => {
  const wrapper = Enzyme.mount(<App />);
  const container = wrapper.find("container");
  expect(container).toBeTruthy();
});