import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import list from './modules/list';
import story from './modules/story';
import comment from './modules/comment';

const rootReducer = combineReducers({
  lists: list.reducers.listApi,
  comments: comment.reducers.commentApi,
  stories: story.reducers.storyApi,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
