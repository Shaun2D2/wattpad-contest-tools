/* eslint-disable no-restricted-syntax */
const got = require('got');
const _ = require('lodash');
const fs = require('fs');

const BASE_API_V3 = 'https://www.wattpad.com/api/v3/';
const BASE_API_V4 = 'https://www.wattpad.com/v4/';

const fetchList = async ({ id }) => got(
  `${BASE_API_V3}/lists/${id}/stories?fields=id%2Cname%2Cstories%28id%2Ctitle%2Ccover%2Cdescription%2Curl%2CvoteCount%2CreadCount%2CnumParts%2CfirstPartId%2Ccompleted%2Ctags%2Cmature%2Cuser%28name%2Cavatar%29%29%2Ctotal%2CnextUrl&limit=1000`,
).json();

const fetchStory = async ({ id }) => got(`${BASE_API_V3}stories/${id}?limit=1000`).json();

const fetchStoryPartComments = async ({ id }) => got(`${BASE_API_V4}parts/${id}/comments?limit=1000`).json();

const fetch = async (event, context, callback) => {
  try {
    const id = _.get(/\d+/.exec(event.path), 0, null);

    const hash = _.get(event.queryStringParameters, 'hash', null);

    console.log(id, hash);

    if (!id) {
      callback(null, {
        statusCode: 400,
        body: JSON.stringify({
          message: 'id is required must be a number',
        }),
      });

      return;
    }

    const bookComments = {};

    const response = await fetchList({ id });

    const storyIds = response.stories.map((story) => story.id);

    const promises = [];

    storyIds.map((storyId) => promises.push(fetchStory({ id: storyId })));

    const storyParts = await Promise.all(promises);

    for (const story of storyParts) {
      bookComments[story.title] = {};

      const commentPromises = [];

      story.parts.forEach((part) => commentPromises.push(fetchStoryPartComments({ id: part.id })));

      const partComments = await Promise.all(commentPromises);

      for (const comments of partComments) {
        const commented = [];

        comments.comments.forEach((comment) => {
          if ((hash && !new RegExp(hash, 'i').test(comment.body)) || commented.includes(comment.author.name)) return;

          commented.push(comment.author.name);

          if (!bookComments[story.title][comment.author.name]) {
            bookComments[story.title][comment.author.name] = 1;
            return;
          }

          bookComments[story.title][comment.author.name] = bookComments[story.title][comment.author.name] + 1;
        });
      }
    }

    callback(null, {
      statusCode: 200,
      body: JSON.stringify(bookComments),
    });
  } catch (e) {
    callback(null, {
      statusCode: 400,
      body: e.message,
    });

    console.log(e);
  }
};

exports.handler = fetch;
