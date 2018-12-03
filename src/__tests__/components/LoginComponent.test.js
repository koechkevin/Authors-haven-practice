import React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from '../../components/Auth/LoginComponent';

describe('test bookmarking component', () => {
  const props = {
    login: jest.fn(),
    onFulfilled: false,
    onPending: false,
  };
  const wrapper = shallow(<LoginComponent {...props} />);

  it('Renders signup component', () => {
    expect(wrapper.find('.btn-primary').length).toBe(1);
  });
});
