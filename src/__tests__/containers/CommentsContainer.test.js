import { mapStateToProps } from '../../containers/Comments/CommentsContainer';

describe('test comment container', () => {
  it('maps state to props', () => {
    const initialState = {
      getComments: { comments: 'some comments' },
    };
    const expected = { payload: { comments: 'some comments' } };
    expect(mapStateToProps(initialState)).toEqual(expected);
  });
});
