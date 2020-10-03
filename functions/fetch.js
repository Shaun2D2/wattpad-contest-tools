const got = require('got');
const _ = require('lodash');
const fs = require('fs');

const fetch = async (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(event),
  });

  return;

  const bookComments = {};

  const listId = 920891761;

  const textSearch = '#WP2020';

  try {
    const response = await got(
      `https://www.wattpad.com/api/v3/lists/${listId}/stories?fields=id%2Cname%2Cstories%28id%2Ctitle%2Ccover%2Cdescription%2Curl%2CvoteCount%2CreadCount%2CnumParts%2CfirstPartId%2Ccompleted%2Ctags%2Cmature%2Cuser%28name%2Cavatar%29%29%2Ctotal%2CnextUrl&limit=1000`,
    ).json();

    const storyIds = response.stories.map((story) => story.id);

    const promises = [];

    storyIds.map((id) => promises.push(got(`https://www.wattpad.com/api/v3/stories/${id}?limit=1000`).json()));

    const storyParts = await Promise.all(promises);

    const allThePromises = [];

    for (const story of storyParts) {
      bookComments[story.title] = {};

      const commentPromises = [];

      story.parts.forEach((part) => commentPromises.push(got(`https://www.wattpad.com/v4/parts/${part.id}/comments?limit=1000`).json()));

      const partComments = await Promise.all(commentPromises);

      for (const comments of partComments) {
        const commented = [];

        comments.comments.forEach((comment) => {
          if (!new RegExp(textSearch).test(comment.body) || commented.includes(comment.author.name)) return;

          commented.push(comment.author.name);

          if (!bookComments[story.title][comment.author.name]) {
            bookComments[story.title][comment.author.name] = 1;
            return;
          }

          bookComments[story.title][comment.author.name] = bookComments[story.title][comment.author.name] + 1;
        });
      }
    }

    fs.writeFileSync(`./output/${listId}.txt`, JSON.stringify(bookComments));

    console.log(bookComments);
  } catch (e) {
    console.log(e);
  }
};

module.handler = fetch;
