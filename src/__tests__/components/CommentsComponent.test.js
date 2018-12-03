import React from 'react';
import { shallow } from 'enzyme';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import configureStore from 'redux-mock-store';
import { commentProps } from '../../mock/comments';
import CommentsComponent from '../../components/Comments/CommentsComponent';
import CommentBlockContainer from '../../containers/Comments/CommentBlockContainer';

describe('test comments component', () => {
  const middlewares = [
    thunkMiddleware,
    promiseMiddleware(),
  ];
  const mockStore = configureStore(middlewares);
  const props = commentProps;
  const store = mockStore({});
  const wrapper = shallow(<CommentsComponent {...props} store={store} />, store);

  afterEach(() => {
    store.clearActions();
  });

  it('renders comments without crashing', () => {
    expect(wrapper.find('#comments').length).toEqual(1);
    expect(wrapper.find(CommentBlockContainer).length).toEqual(1);
  });

  it('commentForm onchange changes state and submits form data', () => {
    wrapper.find('#comment-text').simulate('change',
      {
        target: {
          value: 'some comment',
          name: 'comment-text',
        },
      });
    wrapper.find('#comment-form').simulate('submit', { preventDefault: jest.fn() });
    expect(wrapper.state()['comment-text']).toEqual('some comment');
  });

  it('onsubmit changes state ', () => {
  });

  it('loads before render', () => {
    const prop = { ...props, payload: { loading: true, data: {} } };
    const wrap = shallow(<CommentsComponent {...prop} />, store);
    expect(wrap.find('.loader-element').length).toEqual(1);
  });
});
