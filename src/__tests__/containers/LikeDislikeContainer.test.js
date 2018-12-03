import { mapStateToProps } from '../../containers/Articles/LikeDislikeContainer';

it('correctly maps state to props', () => {
  const state = {
    likeDislike: {
      likeStatus: 'none',
      likesCount: 0,
      dislikeCount: 0,
    },
  };
  expect(mapStateToProps(state)).toHaveProperty('likesCount');
});
