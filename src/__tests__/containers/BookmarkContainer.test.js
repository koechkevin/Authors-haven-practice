import { mapStateToProps } from '../../containers/Articles/BookmarkContainer';
import bookmarkReducer from '../../reducers/bookmark.reducer';

it('correctly maps state to props', () => {
  const favourite = bookmarkReducer;
  expect(mapStateToProps(favourite)).toEqual({});
});
