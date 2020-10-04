import Reduxful from 'reduxful';
import requestAdapter from '../fetch-adapter';

const desc = {
  getList: {
    url: 'https://fluffyduck.tech/.netlify/functions/comment/:id',
  },
};

const apiConfig = { requestAdapter };
const reducer = new Reduxful('commentApi', desc, apiConfig);

export default reducer;
