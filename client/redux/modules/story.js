import Reduxful from 'reduxful';
import requestAdapter from '../fetch-adapter';

const desc = {
  getList: {
    url: 'https://fluffyduck.tech/.netlify/functions/story/:id',
    dataTransform: (data) => JSON.stringify(data),
  },
};

const apiConfig = { requestAdapter };
const reducer = new Reduxful('storyApi', desc, apiConfig);

export default reducer;
