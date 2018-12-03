import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import ResetPasswordComponent from '../../components/Auth/ResetPasswordComponent';

describe('Renders <ResetPasswordComponent /> correctly', () => {
  const props = {
    data: {
      user: '',
    },
    loading: true,
    resetPassword: expect.any(Function),
    onSubmit: jest.fn(),
    alert: () => {},
    match: {
      params: {
        token: 'thisIsaToken',
      },
    },
  };

  const wrapper = shallow(<ResetPasswordComponent {...props} />);

  it('renders ResetPasswordComponent component', () => {
    expect(wrapper.find('Connect(ResetPasswordForm)').exists()).toBe(true);
  });
});
