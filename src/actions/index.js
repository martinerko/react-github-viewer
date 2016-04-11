import { GET_USER_PROFILE, GET_COMMITS, GET_REPOSITORIES, SHOW_LOADER } from '../constants/ActionTypes'
import { CLIENT_ID, CLIENT_SECRET } from '../constants/Defaults';
import axios from 'axios'
import github from 'github-user-contributions'
import Promise from 'bluebird'

const ROOT_URL = 'https://api.github.com/users'
const AUTH_PARAMS = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
const client = github.client(CLIENT_ID, CLIENT_SECRET)

export function getUserProfile(login) {
  return getGithubData(GET_USER_PROFILE, login);
}
export function showLoader(login) {
  var result = processResult(SHOW_LOADER, login, {
    data: {}
  }, true);
  return result;
}

export function getCommits(login) {
  //https://api.github.com/repos/martinerko/xstyle/commits?author=martinerko
  return new Promise(function(resolve, reject) {
    client.commits(login, function(err, data = []) {
      if (err) {
        return resolve(Object.assign(processError(GET_COMMITS, login, err), {
          data
        }))
      }

      resolve(processResult(GET_COMMITS, login, {
        data
      }))
    })
  })
  return getGithubData(GET_COMMITS, login, '/repos?')
}

export function getRepositories(login) {
  return getGithubData(GET_REPOSITORIES, login, '/repos?type=owner&')
}

function getGithubData(actionType, login, what = '?') {
  const url = `${ROOT_URL}/${login}${what}${AUTH_PARAMS}`
  return axios.get(url)
    .then(processResult.bind(null, actionType, login))
    .catch(processError.bind(null, actionType, login))
}

function processResult(type, login, {data}, loading = false) {
  return {
    loading,
    type,
    login,
    data
  }
}

function processError(type, login, response, loading = false) {
  return {
    loading,
    type,
    login,
    data: {},
    error: true,
    errorMessage: response.data.message
  }
}
