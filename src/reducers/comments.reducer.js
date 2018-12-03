import initialState from './initialState';

export const createCommentsReducer = actionType => (state = initialState.comments, action) => {
  switch (action.type) {
    case `${actionType}_COMMENT_LOADING`:
      return {
        ...state,
        loading: true,
      };
    case `${actionType}_COMMENT_SUCCESS`:
      return {
        ...state,
        success: true,
        loading: false,
        errors: {},
        data: action.data,
        failed: false,
      };
    case `${actionType}_COMMENT_FAILURE`:
      return {
        ...state,
        errors: action.errors,
        loading: false,
        failed: true,
      };
    default:
      return state;
  }
};
const getCommentsReducer = createCommentsReducer('FETCH');
export const postCommentsReducer = createCommentsReducer('POST');
export const updateCommentsReducer = createCommentsReducer('UPDATE');
export const deleteCommentReducer = createCommentsReducer('DELETE');
export const replyCommentReducer = createCommentsReducer('REPLY');
export default getCommentsReducer;
