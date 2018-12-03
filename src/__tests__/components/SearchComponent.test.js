import React from 'react';
import { shallow } from 'enzyme';
import SearchComponent from '../../components/Articles/SearchComponent';

const props = {
  search: jest.fn(),
  articles: {
    count: 20,
    results: [],
  },
  loading: false,
  success: false,
};

const wrapper = shallow(<SearchComponent {...props} />);

describe('Test SearchComponent', () => {
  it('mounts components accordingly', () => {
    const spy = jest.spyOn(SearchComponent.prototype, 'componentDidMount');
    wrapper.instance().componentDidMount();
    expect(spy.mock.calls.length).toEqual(1);
  });

  it('calls onPageChange', () => {
    const handleClickSpy = jest.spyOn(wrapper.instance(), 'onPageChange');
    wrapper.instance().onPageChange(2);
    expect(wrapper.instance().state.page).toEqual(2);
    expect(handleClickSpy.mock.calls.length).toEqual(1);
  });

  it('calls onSearchTextChange', (done) => {
    const handleClickSpy = jest.spyOn(wrapper.instance(), 'onSearchTextChange');
    wrapper.instance().onSearchTextChange('text');
    setTimeout(() => {
      expect(wrapper.instance().state.searchText).toEqual('text');
      expect(handleClickSpy.mock.calls.length).toEqual(1);
      done();
    }, 1000);
  });

  it('calls onFieldsChange', () => {
    const handleClickSpy = jest.spyOn(wrapper.instance(), 'onFieldsChange');
    wrapper.instance().onFieldsChange({
      target: {
        name: 'title',
      },
    });
    expect(handleClickSpy.mock.calls.length).toEqual(1);
  });

  it('calls onFieldsChange and removes checked fields', () => {
    const handleClickSpy = jest.spyOn(wrapper.instance(), 'onFieldsChange');
    wrapper.instance().setState({ checkedFields: ['author'] });
    wrapper.instance().onFieldsChange({
      target: {
        name: 'title',
      },
    });
    expect(handleClickSpy.mock.calls.length).toEqual(2);
  });

  it('calls buildSearchQuery', () => {
    const handleClickSpy = jest.spyOn(wrapper.instance(), 'buildSearchQuery');
    const result = wrapper.instance().buildSearchQuery('text');
    expect(result).toEqual('author=text&title=text'); // toggled above
    expect(handleClickSpy.mock.calls.length).toEqual(1);
  });
});
