import React from 'react';
import { shallow } from 'enzyme';
import { Navbar as MaterialNavbar } from 'react-materialize';
import Navbar from '../../components/Navbar';

const props = {
  match: { path: '/:activateModal?', url: '/login', isExact: true, params: {} },
  username: '',
};


describe('Renders <Navbar /> component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Navbar {...props} username={props.username} />);
    expect(wrapper.find(MaterialNavbar).length).toBe(1);
  });

  it('activates login modal', () => {
    props.match.params.activateModal = 'login';
    const wrapper = shallow(<Navbar {...props} username={props.username} />);
    expect(wrapper.instance().state.loginModal).toBe(true);
  });

  it('activates signup modal', () => {
    props.match.params.activateModal = 'signup';
    const wrapper = shallow(<Navbar {...props} username={props.username} />);
    expect(wrapper.instance().state.signupModal).toBe(true);
  });
});
