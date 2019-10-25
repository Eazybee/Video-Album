const create = () => ({
  get: (param) => {
    if (param === '/error') {
      return Promise.reject();
    }

    return {
      data: {
        items: [
          {
            snippet: {
              localized: {
                title: 'This is a mock title',
                description: 'This is a mock description',
              },
            },
            statistics: {
              likeCount: 244454,
              dislikeCount: 23,
            },
          },
        ],
      },
    };
  },
});

export default {
  create,
};
