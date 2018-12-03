import signUpReducer from '../../reducers/signup.reducer';

describe('signup reducer', () => {
  it('should return the initial state', () => {
    const reducer = signUpReducer;
    const InitialState = signUpReducer.initialState;
    expect(reducer(InitialState, {})).toEqual({ loading: false, success: false });
  });
});
