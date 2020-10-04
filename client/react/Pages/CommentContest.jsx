import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useLayoutEffect } from 'react';

import Page from '../Components/Page';

const CommentContest = () => {
  const history = useHistory();
  const { id } = useParams();

  const list = useSelector((state) => state.lists[`getList__id:${id}`]);

  useLayoutEffect(() => {
    if (!list) history.push('/');
  }, [list]);

  return (
    <Page title="Comment Contest">

      {JSON.stringify(list.value)}
    </Page>
  );
};

export default CommentContest;