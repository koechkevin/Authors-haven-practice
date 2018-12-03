import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { HighlightMessage, mapStateToProps } from '../../components/Messages/HighlightMessage';

const props = {
  alert: () => {},
  getRatings: jest.fn(),
  data: { highlights: '' },
  fetchState: {
    article: {
      title: 'title',
      description: 'description',
      body: '',
      slug: 'test-slug',
      image_url: 'url',
      tags: ['test'],
      author: {
        username: 'test',
        image_url: 'https://placehold.it/20x20',
      },
    },
  },
  updateState: {
    loading: false,
  },
  match: {
    params: {
      slug: 'test-slug',
    },
  },
  highlightedText: '',
  fetch: jest.fn(),
  onArticleChange: jest.fn(),
  onPublish: jest.fn(),
  setReadOnly: jest.fn(),
  readOnly: true,
  update: jest.fn(),
  makeToast: jest.fn(),
  highlighting: jest.fn(),
  getHighlight: jest.fn(),
  onSubmit: jest.fn(),
  highlightStore: jest.fn(),
};

const mock = configureMockStore();
const store = mock({});

const wrapper = mount(<HighlightMessage {...props} store={store} />);
describe('HighlightsCommentsComponent', () => {
  it('correctly maps state to props', () => {
    const Initialstate = {
      article: {
        fetchArticle: jest.fn(),
        updateArticle: jest.fn(),
      },
    };
    expect(mapStateToProps(Initialstate)).toHaveProperty('fetchState');
  });

  it('renders comment component', () => {
    expect(wrapper.find('Card').exists()).toBe(true);
  });

  it('calls the onSubmit function', () => {
    const onSubmitSpy = jest.spyOn(
      wrapper.instance(), 'onSubmit',
    );
    const e = { preventDefault: () => {
    },
    };
    const data = {};
    wrapper.instance().onSubmit(e, data);
    expect(onSubmitSpy.mock.calls.length).toEqual(1);
  });

  it('calls the onChange function', () => {
    const onChangeSpy = jest.spyOn(
      wrapper.instance(), 'onChange',
    );
    const e = { target: { name: '', value: '' } };
    const data = {};
    wrapper.instance().onChange(e, data);
    expect(onChangeSpy.mock.calls.length).toEqual(1);
  });

  it('calls the onFocus function', () => {
    const onFocusSpy = jest.spyOn(
      wrapper.instance(), 'onFocus',
    );
    const e = {};
    const data = {};
    wrapper.instance().onFocus(e, data);
    expect(onFocusSpy.mock.calls.length).toEqual(1);
  });

  it('renders HighlightMessage component', () => {
    expect(wrapper.find('HighlightMessage').length).toBe(1);
    expect(wrapper.find('Card').length).toBe(1);
  });
});
