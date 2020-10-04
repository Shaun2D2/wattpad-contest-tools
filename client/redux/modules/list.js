import Reduxful from 'reduxful';
import requestAdapter from '../fetch-adapter';

const desc = {
  getList: {
    url: 'https://fluffyduck.tech/.netlify/functions/list/:id',
  },
};

const apiConfig = { requestAdapter };
const reducer = new Reduxful('listApi', desc, apiConfig);

export default reducer;
