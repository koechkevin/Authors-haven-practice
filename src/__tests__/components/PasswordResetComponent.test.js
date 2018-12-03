import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import ForgotPasswordComponent from '../../components/Auth/ForgotPasswordComponent';
import ForgotPasswordForm from '../../components/forms/ForgotPasswordForm';

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

describe('Renders <ForgotPasswordForm /> correctly', () => {
  const props = {
    data: {
      user: '',
    },
    loading: true,
    resetPassword: expect.any(Function),
    onSubmit: jest.fn(),
  };

  const wrapper = shallow(
    <Provider store={store}>
      <ForgotPasswordForm {...props} />
    </Provider>,
  ).dive({ context: { store: mockStore() } });

  it('renders ForgotPasswordComponent component', () => {
    expect(wrapper.find('ForgotPasswordForm').length).toBe(1);
    expect(wrapper.find('ForgotPasswordForm').props()).toEqual(props);
  });
});
