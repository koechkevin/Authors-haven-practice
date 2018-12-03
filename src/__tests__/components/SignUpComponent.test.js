import React from 'react';
import { mount } from 'enzyme';
import SignUpComponent from '../../components/Auth/SignUpComponent';

describe('test bookmarking component', () => {
  const props = {
    signup: jest.fn(),
    success: false,
    loading: false,
    errors: {},
  };
  const wrapper = mount(<SignUpComponent {...props} />);

  it('Renders signup component', () => {
    expect(wrapper.find('.btn-primary').length).toBe(1);
  });
});
