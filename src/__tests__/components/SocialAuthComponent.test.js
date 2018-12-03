import React from 'react';
import { shallow } from 'enzyme';
import SocialAuth, { buttonsocial } from '../../components/Auth/SocialAuthComponent';
import props from '../../mock/props';

describe('test the social auth container', () => {
  it('test google button renders', () => {
    const wrapper = shallow(<SocialAuth {...props} />);
    expect(wrapper.find('n').length).toEqual(2);
  });

  it('test button is rendered', () => {
    const wrapper = shallow(<buttonsocial />);
    expect(wrapper.find('buttonsocial').length).toEqual(1);
  });
});
