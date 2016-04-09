import { GET_USER_PROFILE, GET_PR, GET_COMMITS, GET_REPOSITORIES, GET_ISSUES } from '../constants/ActionTypes'
import axios from 'axios'

const CLIENT_ID = '2161b6f34365089c494d'
const CLIENT_SECRET = '987b150832f7e50fbb91409149b6d4cd95e0c9b3'
const ROOT_URL = `https://api.github.com/users`
const AUTH_PARAMS = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`

export function getUserProfile(login) {
  return getGithubData(GET_USER_PROFILE, login);
}

export function getPullRequests(login) {
  return getGithubData(GET_PR, login, '/repos?');
}

export function getCommits(login, repositories = []) {
  //https://api.github.com/repos/martinerko/xstyle/commits?author=martinerko
  return getGithubData(GET_COMMITS, login, '/repos?');
}

export function getRepositories(login) {
  return getGithubData(GET_REPOSITORIES, login, '/repos?type=owner&');
}

export function getIssues(login) {
  return getGithubData(GET_ISSUES, login, '/repos?type=owner&');
}

function getGithubData(actionType, login, what = '?') {
  const url = `${ROOT_URL}/${login}${what}${AUTH_PARAMS}`
  return axios.get(url)
    .then(processResult.bind(null, actionType, login))
    .catch(processError.bind(null, actionType, login));
}

function processResult(type, login, {data}) {
  return {
    type,
    login,
    data
  }
}

function processError(type, login, response) {
  return {
    type,
    login,
    data: {},
    error: true,
    errorMessage: response.data.message
  }
}
