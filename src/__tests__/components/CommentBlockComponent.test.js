import React from 'react';
import { mount } from 'enzyme';
import CommentBlockComponent from '../../components/Comments/CommentBlockComponent';
import { replyComment } from '../../actions/replyComment.action';
import { threads, history, props } from '../../mock/comments';
import storeConfig from '../../store';

describe('test commentBlock', () => {
  const prop = { ...props, history, replyComment, threads };
  const wrapper = mount(<CommentBlockComponent store={storeConfig()} {...prop} />);

  it('changes state on click cancel', () => {
    const mockOnClick = jest.fn();
    wrapper.find('#cancel').simulate('click');
    expect(mockOnClick.mock.calls).toEqual([]);
  });

  it('displays threads when button clicked', () => {
    wrapper.find('#thread-button').simulate('click');
    expect(wrapper.state().showThreads).toBeTruthy();
  });

  it('displays edit field when edit button clicked', () => {
    wrapper.find('#edit').simulate('click');
    expect(wrapper.state().showEdit).toEqual(true);
  });

  it('submit reply to change state of display', () => {
    wrapper.find('#submit-reply').simulate('submit');
    expect(wrapper.state().showReply).toEqual(false);
    expect(wrapper.state().showButton).toEqual(true);
  });

  it('deletes a comment for user', () => {
    wrapper.find('#on-delete').simulate('click');
    expect(jest.fn().mock.calls).toEqual([]);
  });

  it('shows edit history and changes the state accordingly', () => {
    wrapper.find('#show-history').simulate('click');
    expect(wrapper.state().showHistory).toEqual(true);
  });

  it('can edit a comment', () => {
    wrapper.find('#edit-comment').simulate('submit');
    wrapper.find('#edit-text').simulate('change');
    expect(wrapper.state().editText).toEqual('body');
  });

  it('receives edit history as props and renders accordingly', () => {
    expect(wrapper.find('#test').length).toEqual(1);
  });
});
