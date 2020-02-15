import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from "enzyme";
import App from './App';

describe("<App />", () => {
  it('renders without crashing', () => {
    const comp = shallow(<App />);

    expect(comp.find('button')).toMatchSnapshot();
    expect(comp.find('form')).toMatchSnapshot();
  });
});
