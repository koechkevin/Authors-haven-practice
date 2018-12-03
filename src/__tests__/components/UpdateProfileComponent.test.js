import React from 'react';
import { shallow } from 'enzyme';
import { Row } from 'react-materialize';
import UpdateProfileComponent from '../../components/Users/UpdateProfileComponent';
import { updateProfileAction } from '../../actions/profile.actions';

const props = {
  profileReducer: {
    profile: {
      username: '',
      bio: '',
    },
  },
  errors: {},
  success: false,
  username: '',
  history: {},
  updateProfileAction,
  updateProfileReducer: {},
  files: [],
};

const wrapper = shallow(<UpdateProfileComponent {...props} />);
it('Renders <Row /> component', () => {
  expect(wrapper.find(Row).length).toBe(3);
});

it('test component did update', () => {
  const spy = jest.spyOn(UpdateProfileComponent.prototype, 'componentDidUpdate');
  wrapper.instance().componentDidUpdate(props);
  expect(spy.mock.calls.length).toEqual(1);
});

it('test fileSelectHandler', () => {
  const handleClickSpy = jest.spyOn(wrapper.instance(), 'fileSelectHandler');
  const event = {
    target: {
      files: [''],
    },
  };
  wrapper.instance().fileSelectHandler(event);
  expect(handleClickSpy.mock.calls.length).toEqual(1);
});

it('calls edit functionality', () => {
  const handleClickSpy = jest.spyOn(wrapper.instance(), 'onEdit');
  const event = {
    preventDefault: jest.fn(),
  };
  wrapper.instance().onEdit(event);
  expect(handleClickSpy.mock.calls.length).toEqual(1);
});

it('calls handle change', () => {
  const handleClickSpy = jest.spyOn(wrapper.instance(), 'handleChange');
  const event = {
    preventDefault: jest.fn(),
    target: {
      name: '',
    },
  };
  wrapper.instance().handleChange(event);
  expect(handleClickSpy.mock.calls.length).toEqual(1);
});
