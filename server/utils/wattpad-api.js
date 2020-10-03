const got = require('got');

const BASE_API_V3 = 'https://www.wattpad.com/api/v3/';
const BASE_API_V4 = 'https://www.wattpad.com/v4/';

const fetchList = async ({ id }) => got(
  `${BASE_API_V3}/lists/${id}/stories?fields=id%2Cname%2Cstories%28id%2Ctitle%2Ccover%2Cdescription%2Curl%2CvoteCount%2CreadCount%2CnumParts%2CfirstPartId%2Ccompleted%2Ctags%2Cmature%2Cuser%28name%2Cavatar%29%29%2Ctotal%2CnextUrl&limit=1000`,
).json();

module.exports = {
  fetchList,
};