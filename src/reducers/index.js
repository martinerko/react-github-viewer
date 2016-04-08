import { combineReducers } from 'redux'
import GithubReducer from './reducer_github'

const rootReducer = combineReducers({
  githubData: GithubReducer
});

export default rootReducer;
