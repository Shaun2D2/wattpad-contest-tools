import Reduxful from 'reduxful';
import requestAdapter from '../fetch-adapter';

const desc = {
  getList: {
    url: 'https://fluffyduck.tech/.netlify/functions/list/:id',
    dataTransform: (data) => JSON.stringify(data),
  },
};

const apiConfig = { requestAdapter };
const reducer = new Reduxful('listApi', desc, apiConfig);

export default reducer;
