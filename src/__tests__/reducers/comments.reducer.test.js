import { createCommentsReducer } from '../../reducers/comments.reducer';
import initialState from '../../reducers/initialState';
import { posting } from '../../actions/postComment.action';
import { failedFetching, successfulFetch } from '../../actions/getComments.action';

describe('createCommentReducer test', () => {
  it('creates a reducer', () => {
    expect(typeof createCommentsReducer('POST')).toEqual('function');
  });

  it('returns state when action type is anonymous', () => {
    const action = ({});
    const reducer = createCommentsReducer('POST');
    expect(reducer(initialState.comments, action)).toEqual(initialState.comments);
  });

  it('changes state appropriately when action of loading is received', () => {
    const reducer = createCommentsReducer('POST');
    const expectedOutput = {
      data: {}, errors: {}, failed: false, loading: true, success: false,
    };
    expect(reducer(initialState.comments, posting())).toEqual(expectedOutput);
  });

  it('updates state with an error it received if status is failed', () => {
    const reducer = createCommentsReducer('FETCH');
    const response = { status: 400, data: 'Bad request' };
    const expectedOutput = {
      data: {}, errors: response, failed: true, loading: false, success: false,
    };
    expect(reducer(initialState.comments, failedFetching(response))).toEqual(expectedOutput);
  });

  it('updates state with data it received if request is successful', () => {
    const reducer = createCommentsReducer('FETCH');
    const data = { status: 200, comments: [{ comment: 'awesome' }, { comment: 'that piece was ' }] };
    const expectedOutput = {
      data, errors: {}, failed: false, loading: false, success: true,
    };
    expect(reducer(initialState.comments, successfulFetch(data))).toEqual(expectedOutput);
  });
});
