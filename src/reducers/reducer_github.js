import { GET_USER_PROFILE, GET_PR, GET_COMMITS, GET_REPOSITORIES, GET_ISSUES } from '../constants/ActionTypes'

const defaults = {
  login: '',
  data: {}
}

export default function (state = defaults, action) {
  const type = action.type

  switch (type) {
    case GET_USER_PROFILE:
    case GET_PR:
    case GET_COMMITS:
    case GET_REPOSITORIES:
    case GET_ISSUES:
      const {login, error, errorMessage} = action
      //enhance original data from state with new one.
      //because we want to keep the original info about the user
      const data = mergeStateWithActionData(state, action)

      return {
        type,
        data,
        login,
        error,
        errorMessage
      }
    default:
      break;
  }

  return state;
}

function mergeStateWithActionData(state, {type, data}) {
  switch (type) {
    case GET_PR:
      return data;
    case GET_COMMITS:
      return Object.assign({}, state.data, {
        commits: processCommits(data)
      });
    case GET_REPOSITORIES:
      //enhance original state with info about repositories
      return Object.assign({}, state.data, {
        repositories: data
      });
    case GET_ISSUES:
      return data;
    default:
      return data;
  }
}

function processCommits(repositories) {
  let commitsMap = repositories.reduce(function(commitsMap, branches) {
    return branches.reduce(function(commitsMap, branch) {
      return branch.commits.reduce(function(commitsMap, {sha, html_url, commit}) {
        const {message} = commit
        const {name, date} = commit.author
        commitsMap[sha] = {
          sha,
          message,
          html_url,
          name,
          date
        }
        return commitsMap;
      }, commitsMap);
    }, commitsMap);
  }, {});

  let commits = Object.keys(commitsMap).map(key => commitsMap[key]);
  commits.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return commits;
}
