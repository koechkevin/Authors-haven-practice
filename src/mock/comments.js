
export const threads = [{
  id: 52,
  body: 'another reply',
  author: {
    username: 'kevin',
    image_url: 'image-url',
  },
  created_at: '20 Nov 2018 12:23:41',
  replies: 0,
  comment_like_count: 0,
  updated_at: '20 Nov 2018 12:23:41',
},
{
  id: 51,
  body: 'this is a reply',
  author: {
    username: 'kevin',
    image_url: 'image-url',
  },
  created_at: '20 Nov 2018 12:23:26',
  replies: 0,
  comment_like_count: 0,
  updated_at: '20 Nov 2018 12:23:26',
}];

export const history = [{
  body: 'test',
  created_at: '20 Nov 2018 08:23:45',
}];

export const props = {
  author: 'kevin',
  createdAt: '20 Nov 2018 08:23:45',
  imageUrl: 'image-url',
  id: 1,
  slug: 'slug',
  body: 'body',
  deleteComment: jest.fn(),
  updateComment: jest.fn(),
};

export const commentProps = {
  slug: 'hi-there',
  postComment: jest.fn(),
  getComments: jest.fn(),
  payload: {
    loading: false,
    data: {
      comments: [{
        author: 'kevin',
        history: [],
        createdAt: '20 Nov 2018 08:23:45',
        id: 1,
        slug: 'slug',
        body: 'body',
        threads: [],
        deleteComment: jest.fn(),
        updateComment: jest.fn(),
        replyComment: jest.fn(),
        getComments: jest.fn(),
      }],
    },
  },
};
