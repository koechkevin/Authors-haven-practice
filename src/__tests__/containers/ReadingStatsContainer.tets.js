import { mapStateToProps } from '../../containers/Users/ReadingStatsContainer';

describe('test ReadingStats container', () => {
  it('maps state to props', () => {
    expect(mapStateToProps({ readingStats: {} })).toEqual({});
  });
});
