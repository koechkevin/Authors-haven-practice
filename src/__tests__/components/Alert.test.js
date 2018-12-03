import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../components/Alert';

describe('Alert component', () => {
  const props = {
    close: () => {},
    message: 'hi there',
  };
  const wrapper = shallow(<Alert {...props} />);

  it('renders a message', () => {
    expect(wrapper.find('span').text()).toBe('hi there');
  });
});
