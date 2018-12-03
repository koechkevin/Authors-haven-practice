import React from 'react';
import { shallow } from 'enzyme';
import { Collection } from 'react-materialize';
import TagsComponent from '../../components/Articles/TagsComponent';

const props = {
  onTagsChange: jest.fn(),
  visible: false,
  onPublish: jest.fn(),
};

const wrapper = shallow(<TagsComponent {...props} />);

describe('Test tags functionality', () => {
  it('renders <Collection/> correctly', () => {
    expect(wrapper.find(Collection).length).toEqual(1);
  });

  it('calls getTagList', () => {
    const spy = jest.spyOn(wrapper.instance(), 'getTagList');
    wrapper.instance().instance = {
      chipsData: [{ tag: 'test' }, { tag: 'tag' }],
    };
    wrapper.instance().getTagList();
    expect(spy.mock.calls.length).toBe(1);
    expect(spy.mock.results[0].value).toEqual(['test', 'tag']);
  });
});
