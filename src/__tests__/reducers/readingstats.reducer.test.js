import reducer from '../../reducers/readingstats.reducer';
import state from '../../reducers/initialState';
import constants from '../../constants';

describe('test stats reducer', () => {
  const initialState = state.readingStats;
  const { READSTATS } = constants;

  it('updates state accordingly when action is fulfilled', () => {
    const action = ({
      type: `${READSTATS}_FULFILLED`,
      payload: {
        data: 'data',
      },
    });
    const testReducer = reducer(initialState, action);
    const expectedOutput = {
      pending: false,
      resolved: true,
      failed: false,
      stats: 'data',
    };
    expect(testReducer).toEqual(expectedOutput);
  });

  it('updates state accordingly if action is rejected', () => {
    const action = ({
      type: `${READSTATS}_REJECTED`,
    });
    const testReducer = reducer(initialState, action);
    const expectedOutput = {
      pending: false,
      resolved: false,
      failed: true,
      stats: [],
    };
    expect(testReducer).toEqual(expectedOutput);
  });

  it('updates state accordingly if action is pending', () => {
    const action = ({
      type: `${READSTATS}_PENDING`,
    });
    const testReducer = reducer(initialState, action);
    const expectedOutput = {
      pending: true,
      resolved: false,
      failed: false,
      stats: [],
    };
    expect(testReducer).toEqual(expectedOutput);
  });

  it('returns default state if action is anonymous', () => {
    const action = ({
      type: `${READSTATS}`,
    });
    const testReducer = reducer(initialState, action);
    expect(testReducer).toEqual(initialState);
  });
});
