const got = require('got');
const _ = require('lodash');

const BASE_API_V4 = 'https://www.wattpad.com/v4/';

const fetchStoryPartComments = async ({ id }) => got(`${BASE_API_V4}parts/${id}/comments?limit=1000`).json();

const list = async (event, context, callback) => {
  const id = _.get(/\d+/.exec(event.path), 0, null);

  if (!id) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        message: 'id is required must be a number',
      }),
    });
  }

  const response = await fetchStoryPartComments({ id });

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response),
  });
};

exports.handler = list;
