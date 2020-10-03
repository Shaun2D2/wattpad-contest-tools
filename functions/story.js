const got = require('got');
const _ = require('lodash');

const BASE_API_V3 = 'https://www.wattpad.com/api/v3/';

const fetchStory = async ({ id }) => got(`${BASE_API_V3}stories/${id}?limit=1000`).json();

const story = async (event, context, callback) => {
  try {
    const id = _.get(/\d+/.exec(event.path), 0, null);

    if (!id) {
      callback(null, {
        statusCode: 400,
        body: JSON.stringify({
          message: 'id is required must be a number',
        }),
      });
    }

    const response = await fetchStory({ id });

    console.log(response);

    callback(null, {
      statusCode: 200,
      body: JSON.stringify(response.stories),
    });
  } catch (e) {
    console.log(e);

    callback(null, { statusCode: 400, body: e.message });
  }
};

exports.handler = story;
