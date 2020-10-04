import Reduxful from 'reduxful';
import requestAdapter from '../fetch-adapter';

const desc = {
  getComment: {
    url: 'https://fluffyduck.tech/.netlify/functions/comment/:id',
    dataTransform: (data) => JSON.parse(data),
  },
};

const apiConfig = { requestAdapter };
const reducer = new Reduxful('commentApi', desc, apiConfig);

export default reducer;
