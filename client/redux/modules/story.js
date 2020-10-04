import Reduxful from 'reduxful';
import requestAdapter from '../fetch-adapter';

const desc = {
  getStory: {
    url: 'https://fluffyduck.tech/.netlify/functions/story/:id',
    dataTransform: (data) => JSON.parse(data),
  },
};

const apiConfig = { requestAdapter };
const reducer = new Reduxful('storyApi', desc, apiConfig);

export default reducer;
