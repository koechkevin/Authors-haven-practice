import React from 'react';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router-dom';
import VerificationComponent from '../../components/Auth/VerificationComponent';

const props = {
  success: false,
  loading: false,
  verification: jest.fn(),
  match: {
    params: {
      token: '',
    },
  },
};

const wrapper = shallow(<VerificationComponent {...props} />);

describe('componentDidMount', () => {
  it('calls componentDidMount', () => {
    const spy = jest.spyOn(wrapper.instance(), 'componentDidMount');
    wrapper.instance().componentDidMount();
    expect(spy.mock.calls.length).toEqual(1);
  });

  it('redirects on success', () => {
    wrapper.setProps({ success: true });
    expect(wrapper.find(Redirect).length).toEqual(1);
  });

  it('loads', () => {
    wrapper.setProps({ success: false, loading: true });
    expect(wrapper.find('div').length).toEqual(1);
  });
});
