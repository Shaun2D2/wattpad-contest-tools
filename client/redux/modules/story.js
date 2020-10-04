import Reduxful from 'reduxful';
import requestAdapter from '../fetch-adapter';

const desc = {
  getStory: {
    url: 'https://fluffyduck.tech/.netlify/functions/story/:id',
    dataTransform: (data, context) => {
      const response = JSON.parse(data);

      return {
        ...response,
        storyId: context.params.id,
      };
    },
  },
};

const apiConfig = { requestAdapter };
const reducer = new Reduxful('storyApi', desc, apiConfig);

export default reducer;
