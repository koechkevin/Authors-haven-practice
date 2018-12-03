import React from 'react';
import { shallow } from 'enzyme';
import Dante from 'Dante2';
import EditorComponent from '../../components/Articles/EditorComponent';

describe('Test Editor Component', () => {
  const props = {
    title: '',
    imageUrl: '',
    description: '',
    body: '',
    onChange: () => {},
  };
  const wrapper = shallow(<EditorComponent {...props} />);

  it('renders <Dante />', () => {
    expect(wrapper.find(Dante).length).toBe(1);
  });

  it('test handles image upload', () => {
    const handleImageUpload = jest.spyOn(wrapper.instance(), 'imageUpload');
    const image = '';
    const state = {};
    wrapper.instance().imageUpload(image, state);
    expect(handleImageUpload.mock.calls.length).toEqual(1);
  });

  it('text handles save', () => {
    const handleSaveSpy = jest.spyOn(wrapper.instance(), 'saveHandler');
    const context = {};
    let text = '';
    for (let i = 0; i < 1000; i += 1) {
      text += 'word';
    }
    const content = {
      blocks: [{
        text,
        type: 'unstyled',
      }],
    };
    wrapper.instance().saveHandler(context, content);
    expect(handleSaveSpy.mock.calls.length).toEqual(1);
  });

  it('captures the content data accurately', () => {
    const handleSaveSpy2 = jest.spyOn(wrapper.instance(), 'saveHandler');
    const content = { blocks: [{ text: 'test text', type: 'unstyled' }, { text: 'description', type: '' }, { data: { type: 'image', url: '' } }] };
    const context = {};
    wrapper.instance().saveHandler(context, content);
    expect(handleSaveSpy2.mock.calls[0][1]).toHaveProperty('blocks');
  });
});
