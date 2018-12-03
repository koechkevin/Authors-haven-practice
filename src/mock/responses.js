const RESPONSES = {
  SUCCESSFUL_EMAIL_RESPONSE: {
    user: {
      message: "We've sent a password reset link to your email",
    },
  },
  ERROR_RESET_EMAIL_RESPONSE: {
    user: {
      message: 'The email provided is not registered',
    },
  },
  ERROR_INVALID_TOKEN: {
    user: {
      message: 'invalid token',
    },
  },
  ERROR_RESETTING_PASSWORD: {
    errors: {
      password: ['Password must have a number and a letter'],
    },
    SUCCESS_RESET_MESSAGE: {
      user: {
        message: 'password successfully changed',
      },
    },
  },
  SUCCESS_HIGLIGHT_MESSAGE: {
    article: 'inventor-nikola-tesla',
    author: 'jameschege',
    comment: 'say nicola tesla',
    id: 206,
    index: 0,
    snippet: 'In 1887, Tesla met two investors who agreed to back the formation of the Tesla Electric Company.',
  },
  HIGHLIGHTING_ERROR_MESSAGE: {
    response: {
      data: {
        errors: {
          error: ['This highlight has already been made.'],
        },
      },
    },
  },
  GET_HIGHLIGHT_SUCCESS_MESSAGE: {
    count: 1,
    highlight: [{
      author: 'james',
      article: 'inventor-nikola-tesla',
      comment: 'This is brilliant mind',
      id: 204,
      index: 0,
      snippet: 'Inventor Nikola Tesla',
    }],
  },
  HIGHLIGHTS:
      [
        {
          author: 'jameschege',
          article: 'the-meaning-of-life',
          snippet: 'They look at moral virtue. But arete as a way of describing quality',
          comment: '',
          index: 0,
          id: 4,
          key: 0,
        },
        {
          author: 'jameschege',
          article: 'the-meaning-of-life',
          snippet: 'handed all the correct answers in advance?Instead.',
          comment: '',
          index: 0,
          id: 3,
          key: 1,
        },
        {
          author: 'jameschege',
          article: 'the-meaning-of-life',
          snippet: 'there are many different methods to answer what might be the most important human question,',
          comment: '',
          index: 0,
          id: 2,
          key: 2,
        },
      ],
};

export default RESPONSES;
