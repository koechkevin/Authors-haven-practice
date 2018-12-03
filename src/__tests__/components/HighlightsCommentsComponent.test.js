import React from 'react';
import { shallow } from 'enzyme';
import HighlightsCommentsComponent from '../../components/Articles/HighlightsCommentsComponent';
import RESPONSES from '../../mock/responses';

const props = {
  highlights: RESPONSES.HIGHLIGHTS,
};

const wrapper = shallow(
  <HighlightsCommentsComponent {...props} />,
);

describe('HighlightsCommentsComponent', () => {
  it('renders comment component', () => {
    expect(wrapper.find('Card').exists()).toBe(true);
  });
});
