import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import ForgotPasswordComponent from '../../components/Auth/ForgotPasswordComponent';

describe('Renders <ForgotPasswordComponent /> correctly', () => {
  const props = {
    data: {
      user: '',
    },
    loading: true,
    resetPassword: expect.any(Function),
    onSubmit: jest.fn(),
  };

  const wrapper = shallow(<ForgotPasswordComponent {...props} />);

  it('renders ForgotPasswordComponent component', () => {
    expect(wrapper.find('Connect(ForgotPasswordForm)').exists()).toBe(true);
  });
});
