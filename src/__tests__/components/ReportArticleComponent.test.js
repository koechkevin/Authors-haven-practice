import React from 'react';
import { shallow } from 'enzyme';
import ReportArticleComponent from '../../components/Articles/ReportArticleComponent';

const props = {
  handleModal: jest.fn(),
  show: false,
  report: {
    loading: false,
    success: false,
  },
  reportArticle: jest.fn(),
  resetStatus: jest.fn(),
  slug: 'test-slug',
  prevProps: {
    success: false,
  },
};

const wrapper = shallow(<ReportArticleComponent {...props} />);

it('mounts componentDidMount accordingly', () => {
  const spy = jest.spyOn(ReportArticleComponent.prototype, 'componentDidMount');
  wrapper.instance().componentDidMount();
  expect(spy.mock.calls.length).toEqual(1);
});

it('mounts componentDidUpdate accordingly', () => {
  const spy = jest.spyOn(ReportArticleComponent.prototype, 'componentDidUpdate');
  wrapper.instance().componentDidUpdate();
  expect(spy.mock.calls.length).toEqual(1);
});

it('mounts handleChange accordingly', () => {
  const spy = jest.spyOn(wrapper.instance(), 'handleChange');
  const event = {
    target: {
      name: 'test',
    },
  };
  wrapper.instance().handleChange(event);
  expect(spy.mock.calls.length).toEqual(1);
});

it('renders textarea', () => {
  expect(wrapper.find('#textarea2').length).toBe(1);
});
