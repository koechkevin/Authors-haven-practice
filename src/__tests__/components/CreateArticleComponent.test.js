import React from 'react';
import { shallow } from 'enzyme';
import CreateArticleComponent from '../../components/Articles/CreateArticleComponent';
import EditorComponent from '../../components/Articles/EditorComponent';


describe('Renders CreateArticlesComponent correctly', () => {
  const props = {
    articles: {},
    loading: false,
    success: false,
    onArticleChange: jest.fn(),
    publish: () => {},
    history: {},
    alert: {},
  };

  const wrapper = shallow(<CreateArticleComponent {...props} />);

  it('renders <EditorComponent />', () => {
    expect(wrapper.find(EditorComponent).length).toBe(1);
  });

  it('renders .container class', () => {
    expect(wrapper.find('.container').length).toBe(1);
  });

  it('test click on publish', () => {
    expect(wrapper.find('Col p').length).toEqual(1);
    const handleClickSpy = jest.spyOn(wrapper.instance(), 'onPublish');
    wrapper.instance().onPublish();
    expect(handleClickSpy.mock.calls.length).toEqual(1);
  });

  it('test update state onchange', () => {
    const handleClickSpy = jest.spyOn(wrapper.instance(), 'onArticleChange');
    const data = {};
    wrapper.instance().onArticleChange(data);
    expect(handleClickSpy.mock.calls.length).toEqual(1);
  });

  it('calls onTagsChange', () => {
    const spy = jest.spyOn(wrapper.instance(), 'onTagsChange');
    const tags = [];
    wrapper.instance().onTagsChange(tags);
    expect(spy.mock.calls.length).toEqual(1);
  });

  it('calls handleDropDown', () => {
    const spy = jest.spyOn(wrapper.instance(), 'onTagsChange');
    wrapper.instance().handleDropDown();
    expect(spy.mock.calls.length).toEqual(1);
  });
});
